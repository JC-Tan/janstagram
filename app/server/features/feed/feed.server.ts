import { json } from '@remix-run/node'
import { prisma } from '~/server/prisma.server'

export const feed = async (userId: string) => {
  const following = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    select: {
      following: {
        select: {
          id: true,
        },
      },
    },
  })

  if (!following) {
    return json({ error: "Something went wrong with the feed's following" })
  }

  const posts = await prisma.post.findMany({
    select: {
      caption: true,
      createdAt: true,
      media: true,
      user: true,
      userId: true,
    },
    where: {
      user: {
        id: {
          in: [...following.following.map((user) => user.id), userId],
        },
      },
    },
    take: 10,
    orderBy: {
      createdAt: 'desc',
    },
  })

  if (!posts) {
    return json({
      error: 'Something went wrong with grabbing posts for the feed',
    })
  }

  return posts
}
