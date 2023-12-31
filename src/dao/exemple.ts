import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function exemple() {
    // ... you will write your Prisma Client queries here
    try {
        const result =  await prisma.user.findMany({
            select: {
                email: true,
                name: true
            }
        })
        await prisma.$disconnect()
        return result
    } catch (e) {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    }
}
