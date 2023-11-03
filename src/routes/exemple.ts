import { Router } from "express";
import { ping } from "../controllers/ping";


export const exempleRouter = Router();

exempleRouter.route("/ping").get(ping);

