import React, { FunctionComponent, StrictMode } from "react";
import Router from "./layout/Router";
import App from "./App";
import { Iprops } from "server/types/node";
import IsServerContextProvider from "./pages/Home/components/IsServerContextProvider";

const Main: FunctionComponent<{ props: Iprops }> = ({ props }) => {
  return (
    <StrictMode>
      <IsServerContextProvider>
        <Router props={props as Iprops}>
          <App props={props as Iprops}></App>
        </Router>
      </IsServerContextProvider>
    </StrictMode>
  );
};

export default Main;
