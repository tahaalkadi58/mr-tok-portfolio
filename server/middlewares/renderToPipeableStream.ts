import fs from "node:fs/promises";
import { Transform } from "node:stream";
import { isProduction, base, vite } from "../server";
import { Controller } from "../types/node";
import defaultProps from "../utils/defaultResponseProps";
import { Request, Response, NextFunction } from "express";
const ABORT_DELAY = 10000;

/**
 * Middleware function to render a server-side response with streaming
 */
export const renderToPipeableStream: Controller = async function (req, res) {
  try {
    let templateHtml = isProduction
      ? await fs.readFile("./dist/client/index.html", "utf-8")
      : "";

    const url = req.originalUrl.replace(base, "");
    const AppSSR = res.locals.AppSSR;

    let template;
    let render;

    if (!isProduction) {
      // Always read fresh template in development
      template = await fs.readFile("index.html", "utf-8");
      template = template.replace(/<!--\s*title\s*-->/, AppSSR.page);
      template = template.replace(
        /<!--\s*props\s*-->/,
        `<script>
            window.props = ${JSON.stringify(AppSSR)};
        </script>`,
      );
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule("/client/entry-server.tsx")).render;
    } else {
      templateHtml = templateHtml.replace(/<!--\s*title\s*-->/, AppSSR.page);
      templateHtml = templateHtml.replace(
        /<!--\s*props\s*-->/,
        `<script>
          window.props = ${JSON.stringify(AppSSR)};
          </script>`,
      );
      console.log(templateHtml.search(/<!--\s*title\s*-->/));
      template = templateHtml;
      render = // @ts-ignore
      (await import("../../dist/server/entry-server.js")).render;
    }
    let didError = false;

    const { pipe, abort } = render(url, AppSSR, {
      onShellError() {
        res.status(500).set({ "Content-Type": "text/html" });
        res.send("<h1>Something went wrong</h1>");
      },
      onShellReady() {
        res.status(didError ? 500 : 200).set({ "Content-Type": "text/html" });

        const transformStream = new Transform({
          transform(chunk, encoding, callback) {
            res.write(chunk, encoding);
            callback();
          },
        });

        const [htmlStart, htmlEnd] = template.split(`<!--app-html-->`);
        res.write(htmlStart);

        transformStream.on("finish", () => {
          res.end(htmlEnd);
        });

        pipe(transformStream);
      },
      onError(error: any) {
        didError = true;
        console.error(error);
      },
    });

    setTimeout(() => {
      abort();
    }, ABORT_DELAY);
  } catch (e: any) {
    vite?.ssrFixStacktrace(e);
    console.error(e.stack);
    res.status(500).end(e.stack);
  }
};

export const renderMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (res.locals.AppSSR) {
    renderToPipeableStream(req, res);
  } else {
    next();
  }
};
