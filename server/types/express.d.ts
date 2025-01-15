import "express";
import { Iprops } from "./node";
declare module "express" {
  export interface Locals {
    AppSSR: Iprops;
  }
}
