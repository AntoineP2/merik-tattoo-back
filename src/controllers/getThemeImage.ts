import { Request, Response } from "express";
import { getThemeImageDao } from "../dao/getThemeImage.DAO";

// Route pour tester la connexion à la base de données

export async function getThemeImage(req: Request, res: Response){
    try {
        const result = await getThemeImageDao()
        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json("Error here")
    }
    
}