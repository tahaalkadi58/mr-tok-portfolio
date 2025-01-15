import { Iprops } from "../types/node.js";

const defaultProps: Iprops = {
  url: "/not-found",
  page: "Not Found",
  data: {
    title: "404 - Error",
    message: `Page not found on the server!`,
  },
};

export default defaultProps;
