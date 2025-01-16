import React, { FunctionComponent } from "react";
import { Iprops } from "../../../server/types/node";
import IsServerContextProvider from "../Home/components/IsServerContextProvider";
import ClientComponent from "../shared/ClientComponent";
import "./not-found.scss";
const NotFound: FunctionComponent<{ props: Iprops }> = ({ props }) => {
  const { data } = props;
  return (
    <IsServerContextProvider>
      <ClientComponent>
        <div className="container">
          <div className="gif">
            <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
          </div>
          <div className="content">
            <h1 className="main-heading">{data.title}</h1>
            <p>{data.message}</p>
            <a href="/" target="blank">
              <button>
                Back to home <i className="far fa-hand-point-right"></i>
              </button>
            </a>
          </div>
        </div>
      </ClientComponent>
    </IsServerContextProvider>
  );
};

export default NotFound;
