import { json } from '@remix-run/node'
import { prisma } from '../../prisma.server'

export async function findUserByUsername(username: string) {
  try {
    const user = await prisma.user.findFirst({
      where: { userName: username },
      include: {
        posts: true,
        followers: true,
        following: true,
      },
    })
    return user
  } catch {
    throw json({ error: `Can't find that user` })
  }
}
