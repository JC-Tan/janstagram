import { json } from '@remix-run/node'
import { prisma } from '~/server/prisma.server'

export const post = async (userId: string, uploadUrl: string, bio: string) => {
  const res = await prisma.post.create({
    data: {
      caption: bio,
      media: {
        create: [{ url: uploadUrl, type: 'photo' }],
      },
      user: {
        connect: {
          id: userId,
        },
      },
    },
  })

  return json({ id: res.id })
}

// Temporary
export const deletePost = async (userId: string) => {
  const res = await prisma.post.findMany({
    where: {
      user: {
        id: userId,
      },
    },
  })

  const res2 = await prisma.post.delete({
    where: {
      id: res[0].id,
    },
  })

  return json({ id: res2.id })
}
