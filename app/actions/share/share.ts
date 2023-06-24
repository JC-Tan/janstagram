import { json } from '@remix-run/node'
import { post } from '~/server/features/post/post.server'

export const share = async (data: any) => {
  console.log('share', data)
  const userId = data.userId as string
  const url = data.uploadUrl as string
  const caption = data.caption as string

  const postResult = await post(userId, url, caption)
  if (!postResult) {
    return json({
      error: 'Something went wrong with sharing a photo',
    })
  }
  return json({ postResult })
}
