import { ErrorHandler } from "../types/node.js";

const errorLogger: ErrorHandler = function (err, req, res, next) {
  console.log(err);
  next(err);
};

export default errorLogger;
