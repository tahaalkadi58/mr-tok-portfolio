import { createContext, useContext } from "react";

export const isServer = createContext<boolean>(false);

const useServer = () => useContext(isServer);

export default useServer;
