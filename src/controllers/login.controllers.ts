import { Request, Response } from "express";
import * as CryptoJS from "crypto-js";
import * as bcrypt from "bcrypt"
import { decryptPassword } from "../utils/decrpytPassword";
import { loginDao } from "../dao/login.DAO";
import * as jwt from "jsonwebtoken";
import { PRI_KEY_JWT, PUB_KEY_JWT } from "../config/dotenv";


// JWT installé
export const login = async (req: Request, res: Response) => {
    const { userName, userPasswordCrypted } = req.body
    const userInfo = await loginDao(userName)
    if (!userInfo) {
        return res.status(400).json("User not found")
    }
    const passwordDataBase = userInfo.password

    bcrypt.compare(decryptPassword(userPasswordCrypted), passwordDataBase!, function (err: any, result: boolean) {
        if (result == true) {
        } else {
            return res.status(400).json("wrong password")
        }
    })
    const userInfoToSend = {
        userName: userInfo.name,
        userRole: userInfo.role
    }
    const token = jwt.sign({userInfo : userInfoToSend}, PRI_KEY_JWT!, { expiresIn: '24h', algorithm: 'RS256'})

    // const decodeToken = jwt.verify(token, PUB_KEY_JWT!, { algorithms: ['RS256'] })
    return res.status(200).json(token)
}