import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


// Cette fonction recupère toutes les images
export async function loginDao(userName: string) {
    // ... you will write your Prisma Client queries here
    try {
        const userInfo = await prisma.user.findFirst({  where : {name : userName}, select: { id: true, name: true, password: true, role: true }})
        await prisma.$disconnect()
        return userInfo
    } catch (e) {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    }
}