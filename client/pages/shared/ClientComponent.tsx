import React, { FunctionComponent, ReactNode } from "react";
import useServer from "client/context/isServerContext";
const ClientComponent: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const isServer = useServer();
  if (isServer) {
    return null;
  } else {
    return <>{children}</>;
  }
};

export default ClientComponent;
