import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.get('/', async (req, res) => {
  const users = await prisma.user.findFirst()
  res.send(users?.name)
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🐱‍👤 Http server running on http://localhost:3333')
  })
