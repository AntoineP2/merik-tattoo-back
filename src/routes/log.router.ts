import { Router } from "express";
import { login } from "../controllers/login.controllers";


export const logRouter = Router();

logRouter.route("/login").post(login);



