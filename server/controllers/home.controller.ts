import { NextController } from "../types/node";
import pushPropsToHeaderLocals from "../middlewares/pushPropsToLocals";
const HomeController: NextController = async (req, res, next) => {
  try {
    pushPropsToHeaderLocals(res, {
      url: "/",
      page: "Home",
      data: {
        user: {},
        message: "Welcome in home page!",
      },
    });
    next();
  } catch (error) {
    res.status(500).send("Error in showing home page!");
    next(error);
  }
};

export default HomeController;
