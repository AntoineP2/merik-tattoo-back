import { Router } from "express";
import { sendMail } from "../controllers/getSendMail.controllers";


export const emailRouter = Router();

emailRouter.route("/sendMail").get(sendMail);


