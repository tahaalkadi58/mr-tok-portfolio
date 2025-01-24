import express, { Express } from 'express';
import { renderToPipeableStream } from '../server/middlewares/renderToPipeableStream';
import defaultController from '../server/controllers/default.controller';
import type { ViteDevServer } from 'vite';
import errorLogger from '../server/middlewares/error-logger';
import errorHandlerMiddleware from '../server/middlewares/error-handler';
import HomeRouter from '../server/routes/home.route';
import { renderMiddleware } from '../server/middlewares/renderToPipeableStream';
import { config } from 'dotenv';
import path from 'node:path';
import { __dirname } from '../server/utils/cjs-variables';
config();

export const isProduction =
	process.env.NODE_ENV === 'production';
const PORT = Number(process.env.PORT) || 3004;
export const base = process.env.BASE || '/';
const ABORT_DELAY = 10000;

export const app: Express = express();

app.use(
	express.static(path.join(__dirname, 'public'), {
		maxAge: '1d',
		etag: false,
	})
);

export let vite: ViteDevServer;
if (!isProduction) {
	const { createServer } = await import('vite');
	vite = await createServer({
		server: { middlewareMode: true },
		appType: 'custom',
		base,
	});
	app.use(vite.middlewares);
} else {
	// @ts-ignore
	const compression = (await import('compression')).default;
	const sirv = (await import('sirv')).default;
	app.use(compression());
	app.use(base, sirv('dist/client', { extensions: [] }));
}

app.use((req, res, next) => {
	console.log(`Request received: ${req.originalUrl}`);
	next();
});

app.use(HomeRouter);

app.use(renderMiddleware);

app.get('*all', defaultController);

app.use(errorLogger, errorHandlerMiddleware);

app.listen(PORT, () => {
	console.log(
		`Server is running on http://localhost:${+PORT}`
	);
});


export default app;