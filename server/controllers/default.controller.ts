import { Controller, NextController } from "../types/node";
import defaultProps from "../utils/defaultResponseProps";
import { renderToPipeableStream } from "../middlewares/renderToPipeableStream";
import pushPropsToHeaderLocals from "../middlewares/pushPropsToLocals";
const defaultController: NextController = async (req, res, next) => {
  try {
    pushPropsToHeaderLocals(res, defaultProps);
    renderToPipeableStream(req, res);
  } catch (error) {
    res.status(500).send("Something went wrong.");
    next(error);
  }
};

export default defaultController;
