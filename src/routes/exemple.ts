import { Router } from "express";
import { ping, createMdp } from "../controllers/ping";


export const exempleRouter = Router();

exempleRouter.route("/ping").get(ping);
exempleRouter.route("/mdp").get(createMdp);


