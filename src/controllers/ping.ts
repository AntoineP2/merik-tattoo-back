import { Request, Response } from "express";
import { exemple } from "../dao/exemple";

// Route pour tester la connexion à la base de données

export async function ping(req: Request, res: Response){
    try {
        const result = await exemple()
        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json("Error here")
    }
    
}