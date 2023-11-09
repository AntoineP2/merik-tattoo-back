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
            where: {
                isFlash: false
            },
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

// On récupère les images des tattoos flash par theme
export async function getFlashTattoByThemeIdDAO(themeId: number) {
    // ... you will write your Prisma Client queries here
    try {
        const pictures = await prisma.theme.findMany({
            where: {
                id: themeId,
                Picture: {
                    some: {
                        tattoo: {
                            isFlash: true
                        }
                    }
                },
            },
            select: {
                name: true,
                Picture: {
                    select: {
                        id: true,
                        url: true,
                    }

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

// export async function getFlashTattoByThemeIdDAO(themeId: number) {
//     // ... you will write your Prisma Client queries here
//     try {
//         const pictures = await prisma.picture.findMany({
//             where: {
//                 tattoo: {
//                     isFlash: true
//                 },
//                 themeId: themeId
//             },
//             select: {
//                 id: true,
//                 url: true,
//             }
//         })
//         await prisma.$disconnect()
//         return pictures
//     } catch (e) {
//         console.error(e)
//         await prisma.$disconnect()
//         process.exit(1)
//     }
// }