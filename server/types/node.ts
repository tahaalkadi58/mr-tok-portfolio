import { NextFunction, Response, Request } from "express";

export interface ErrorV1 extends Error {
  name: string;
  statusCode: number;
  message: string;
}

export interface Iprops {
  url: string;
  page: string;
  data: {
    title: string;
  } & any;
}

export type ErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => any;

export type Controller = (req: Request, res: Response) => any;

export type NextController = (
  req: Request,
  res: Response,
  next: NextFunction,
) => any;
