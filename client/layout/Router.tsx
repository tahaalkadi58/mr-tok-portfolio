import React, { FunctionComponent } from "react";
import { StaticRouter, BrowserRouter } from "react-router-dom";
import { Iprops } from "../../server/types/node.js";
import useServer from "client/context/isServerContext.js";
interface RouterProps {
  props: Iprops;
  children: React.ReactNode;
}

const Router: FunctionComponent<RouterProps> = ({ props, children }) => {
  const isServer = useServer();
  return (
    <>
      {isServer ? (
        <StaticRouter location={props.url}>{children}</StaticRouter>
      ) : (
        <BrowserRouter>{children}</BrowserRouter>
      )}
    </>
  );
};

export default Router;
