import React, {
  useState,
  useEffect,
  FunctionComponent,
  ReactNode,
} from "react";
import { isServer as server } from "client/context/isServerContext";

const IsServerContextProvider: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {
    setIsServer(false);
  }, []);

  return <server.Provider value={isServer}>{children}</server.Provider>;
};

export default IsServerContextProvider;
