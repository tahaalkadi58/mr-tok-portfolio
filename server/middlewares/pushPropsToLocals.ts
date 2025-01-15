import { Response } from "express";
import { Iprops } from "../types/node";

const pushPropsToHeaderLocals = async (res: Response, AppSSR: Iprops) => {
  try {
    res.locals.AppSSR = AppSSR;
  } catch (error) {
    res.status(500).send("Error in setting AppSSR props to header");
  }
};
export default pushPropsToHeaderLocals;
