import { Request, Response } from "express";
import * as CryptoJS from "crypto-js";
import * as bcrypt from "bcrypt"
import { decryptPassword } from "../utils/decrpytPassword";
import { loginDao } from "../dao/login.DAO";
import * as jwt from "jsonwebtoken";
import { PRI_KEY_JWT, PUB_KEY_JWT } from "../config/dotenv";


export const login = async (req: Request, res: Response) => {
    try {
        const { userName, userPasswordCrypted } = req.body
        const userInfo = await loginDao(userName)
        if (!userInfo) {
            return res.status(400).json("User not found")
        }
        const passwordDataBase = userInfo.password

        const isPasswordValid = await bcrypt.compare(decryptPassword(userPasswordCrypted), passwordDataBase!)
        if (!isPasswordValid) {
            return res.status(400).json("Wrong password")
        }

        const userInfoToSend = {
            userName: userInfo.name,
            userRole: userInfo.role
        }
        const token = jwt.sign({ userInfo: userInfoToSend }, PRI_KEY_JWT!, { expiresIn: '24h', algorithm: 'RS256' })

        // const decodeToken = jwt.verify(token, PUB_KEY_JWT!, { algorithms: ['RS256'] })
        return res.status(200).json(token)
    }
    catch (e) { 
        console.error(e)
    }

}