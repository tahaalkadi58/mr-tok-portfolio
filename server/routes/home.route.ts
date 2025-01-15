import express, { Router } from "express";
import HomeController from "../controllers/home.controller";
const HomeRouter: Router = Router();

HomeRouter.get("/", HomeController);

export default HomeRouter;
