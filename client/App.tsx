import React, { FunctionComponent, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/page.js";
import { Iprops } from "../server/types/node.js";
const NotFound = React.lazy(() => import("./pages/NotFound/page.js"));
import "./styles/App.scss";

const App: FunctionComponent<{ props: Iprops }> = ({ props }) => {
  console.log(props);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home props={props} />} />
        <Route path="*" element={<NotFound props={props} />} />
      </Routes>
    </>
  );
};

export default App;
