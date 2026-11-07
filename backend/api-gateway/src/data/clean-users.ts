import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Cleaning non-admin users...')
  const deleted = await prisma.user.deleteMany({
    where: {
      role: {
        not: 'admin'
      }
    }
  })
  console.log(`Deleted ${deleted.count} users.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
