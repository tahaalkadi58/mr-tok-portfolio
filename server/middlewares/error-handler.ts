import { StatusCodes } from "http-status-codes";
import { ErrorHandler } from "../types/node.js";

const errorHandlerMiddleware: ErrorHandler = (err, req, res) => {
  const { name, message, statusCode } = err;
  const { originalUrl } = req;
  let customError = {
    statusCode: statusCode,
    message: message,
  };
  switch (name) {
    case "not_found":
      customError.statusCode = StatusCodes.NOT_FOUND;
      customError.message = `${originalUrl} is not found in the server! :(`;
      break;
    case "bad_request":
      customError.statusCode = StatusCodes.BAD_REQUEST;
      customError.message = `Please check your internet connection and try again later`;
      break;
    default:
      customError.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
      customError.message = "Something went wrong with server, try again later";
      break;
  }
  res.status(customError.statusCode);
  res.json({ message: customError.message });
};

export default errorHandlerMiddleware;
