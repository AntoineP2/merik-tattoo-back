import { Request, Response } from "express";

export function ping(req: Request, res: Response){
    try {
        return res.status(200).json("Bienvenu sur l'application")
    } catch (error) {
        return res.status(400).json("Error here")
    }
    
}