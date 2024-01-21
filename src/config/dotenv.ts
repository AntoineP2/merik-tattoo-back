import * as dotenv from 'dotenv';
dotenv.config();
export const PUB_KEY_JWT: string = process.env.PUB_KEY_JWT!;
export const PRI_KEY_JWT: string = process.env.PRI_KEY_JWT!;
export const PUB_KEY_PASSWORD: string = process.env.PUB_KEY_PASSWORD!;