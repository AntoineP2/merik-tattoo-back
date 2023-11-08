import { Request, Response } from "express";
import { getAllPictureDao, getAllPictureByTattooDao } from "../dao/picture.DAO";

// Route pour tester la connexion à la base de données

export async function getAllPicture(req: Request, res: Response){
    try {
        const result = await getAllPictureByTattooDao()
        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json("Error here")
    }
    
}