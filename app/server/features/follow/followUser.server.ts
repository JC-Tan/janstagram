import { json } from '@remix-run/node'
import { prisma } from '~/server/prisma.server'

export const follow = async (userId: string, otherId: string) => {
  // Put otherId in following of user
  const followingRes = await prisma.user.update({
    where: { id: userId },
    data: {
      following: {
        connect: {
          id: otherId,
        },
      },
    },
  })

  // Put user in follower of other
  const followerRes = await prisma.user.update({
    where: { id: otherId },
    data: {
      followers: {
        connect: {
          id: userId,
        },
      },
    },
  })

  if (!followingRes || !followerRes) {
    return json({ error: 'Something went wrong with following another user!' })
  }

  return json({ followingRes, followerRes })
}

export const unfollow = async (userId: string, otherId: string) => {
  const unfollowingRes = await prisma.user.update({
    where: {
      id: otherId,
    },
    data: {
      followers: {
        disconnect: {
          id: userId,
        },
      },
    },
  })

  const unfollowerRes = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      following: {
        disconnect: {
          id: otherId,
        },
      },
    },
  })

  if (!unfollowingRes || !unfollowerRes) {
    return json({
      error: 'Something went wrong with unfollowing another user!',
    })
  }

  return json({ unfollowingRes, unfollowerRes })
}
