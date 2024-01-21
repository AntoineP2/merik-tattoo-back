import { Request, Response } from "express";
import { exemple } from "../dao/exemple";
import * as bcrypt from "bcrypt"
import { decryptPassword } from "../utils/decrpytPassword";
import { PUB_KEY_PASSWORD } from "../config/dotenv";
// Route pour tester la connexion à la base de données

export async function ping(req: Request, res: Response) {
    try {
        const result = await exemple()
        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json("Error here")
    }

}

export async function createMdp(req: {query : { password: string}}, res: Response) {
    try {
        const { password } = req.query
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        return res.status(200).json(hash)
    
    }
    catch (error) {
        return res.status(400).json("Error here")
    }

}