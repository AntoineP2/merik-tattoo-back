import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function exemple() {
    // ... you will write your Prisma Client queries here
    return await prisma.user.findMany({
       select: {
        email: true,
        name: true
       }
    })
}


exemple()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })