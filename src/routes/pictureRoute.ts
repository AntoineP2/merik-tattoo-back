import { Router } from "express";
import { getAllPicture } from "../controllers/getAllPicture";
import { getThemeImage } from "../controllers/getThemeImage";


export const pictureRouter = Router();

pictureRouter.route("/getAllPicture").get(getAllPicture);
pictureRouter.route("/getThemeImage").get(getThemeImage)

