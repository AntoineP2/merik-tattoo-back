import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


// Cette fonction recupère toutes les images
export async function getThemeImageDao() {
    // ... you will write your Prisma Client queries here
    try {
        const images = await prisma.theme.findMany({
            select: {
                id: true,
                name: true,
                image: true,
            },
            orderBy: {
                id: "asc"
            }
        })
        await prisma.$disconnect()
        return images
    } catch (e) {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    }
}