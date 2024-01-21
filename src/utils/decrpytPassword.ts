import * as CryptoJS from "crypto-js";
import { PUB_KEY_PASSWORD } from "../config/dotenv";

export function decryptPassword(password: string) {
    const bytes = CryptoJS.AES.decrypt(password, PUB_KEY_PASSWORD);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
    return originalPassword;
}