import { json } from '@remix-run/node'
import { prisma } from '../prisma.server'

export async function findUserByUsername(username: string) {
  console.log('userSearch: ', username)
  try {
    const user = await prisma.user.findFirst({ where: { userName: username } })
    return user
  } catch {
    throw json({ error: `Can't find that user` })
  }
}
