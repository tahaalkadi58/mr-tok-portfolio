import { ErrorV1 } from "../types/node.js";

class customeError extends Error implements ErrorV1 {
  name: string;
  statusCode: number;
  message: string;
  constructor(
    name: string = "",
    statusCode: number = 400,
    message: string = "",
  ) {
    super();
    this.name = name;
    this.statusCode = statusCode;
    this.message = message;
  }
}

export default customeError;
