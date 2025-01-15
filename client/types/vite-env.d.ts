import { Iprops } from "../../server/types/node";

/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
declare global {
  interface Window {
    props: Iprops;
  }
}
