import React, {
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  WindowLoadEvent,
  WindowScrollEvent,
  WindowResizeEvent,
} from "client/context/windowEventContext";

import { iresizeEvent } from "client/context/windowEventContext";
import useServer from "client/context/isServerContext";

function WindowEventsProvider({ children }: { children: ReactNode }) {
  const isServer = useServer();
  const [scrollY, setScrollY] = useState<number>(0);
  const [isLoad, setLoad] = useState<boolean>(false);
  const [resize, setResize] = useState<iresizeEvent>({
    windowHeight: 0,
    windowWidth: 0,
  });
  const scrollSetter = () => {
    setScrollY(window.scrollY);
  };
  const loadSetter = () => {
    setLoad(true);
    setResize({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    });
  };
  const resizeSetter = () => {
    setResize({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    });
  };
  useEffect(() => {
    if (!isServer) {
      window.addEventListener("load", loadSetter);
      window.addEventListener("scroll", scrollSetter);
      window.addEventListener("resize", resizeSetter);

      return () => {
        window.removeEventListener("load", loadSetter);
        window.removeEventListener("scroll", scrollSetter);
        window.removeEventListener("resize", resizeSetter);
      };
    }
    return;
  }, [isServer]);
  return (
    <WindowLoadEvent.Provider
      value={{
        isLoad,
      }}
    >
      <WindowScrollEvent.Provider
        value={{
          scrollY,
        }}
      >
        <WindowResizeEvent.Provider
          value={{
            ...resize,
          }}
        >
          {children}
        </WindowResizeEvent.Provider>
      </WindowScrollEvent.Provider>
    </WindowLoadEvent.Provider>
  );
}

export default WindowEventsProvider;
