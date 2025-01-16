import "express";
import { Iprops } from "./node";
declare module "express" {
  export interface Locals {
    AppSSR: Iprops;
  }
}
declare global {
  namespace Express {
    interface Error {
      statusCode?: number;
      message?: string;
      name?: string; // خصائص إضافية مثل تفاصيل الخطأ
    }
  }
}
export {};
