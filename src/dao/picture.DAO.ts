import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


// Cette fonction recupère toutes les images
export async function getAllPictureDao() {
    // ... you will write your Prisma Client queries here
    try {
        const pictures = await prisma.picture.findMany({
            select: {
                id: true,
                url: true,
            }
        })
        await prisma.$disconnect()
        return pictures
    } catch (e) {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    }
}

// Cette fonction recupère toutes les images par tattoo
export async function getAllPictureByTattooDao() {
    // ... you will write your Prisma Client queries here
    try {
        const pictures = await prisma.tattoo.findMany({
            select: {
                id: true,
                Picture: {
                    select: { url: true, }
                }
            }
        })
        await prisma.$disconnect()
        return pictures
    } catch (e) {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    }
}
