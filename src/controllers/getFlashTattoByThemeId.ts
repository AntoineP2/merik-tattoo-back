import {getFlashTattoByThemeIdDAO} from "../dao/picture.DAO";
import { Request, Response } from "express";

export async function getFlashTattoByThemeId(req: Request, res: Response) {
    try {
        const { themeId } = req.query
        const result = await getFlashTattoByThemeIdDAO(Number(themeId))
        return res.status(200).json(result)
    }
    catch (error) {
        return res.status(400).json("Error here")
    }
}