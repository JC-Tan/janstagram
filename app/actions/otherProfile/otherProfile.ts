import { ActionArgs, json, redirect } from '@remix-run/node'
import { follow, unfollow } from '~/server/features/follow/followUser.server'
import { share } from '../share/share'
import { logout } from '~/server/auth.server'

export const otherProfileAction = async ({ request }: ActionArgs) => {
  const form = await request.formData()
  const data = JSON.parse(form.get('json') as string)
  const userId = data?.userId as string
  const id = data?.id as string

  try {
    switch (data._action) {
      case 'Follow':
        const followRes = await follow(userId, id)
        if (!followRes) {
          return json({
            error: 'Something went wrong with following another user',
          })
        }
        return json({ followRes })
      case 'Unfollow':
        const unfollowRes = await unfollow(userId, id)
        if (!unfollowRes) {
          return json({
            error: 'Something went wrong with unfollowing another user',
          })
        }
        return json({ unfollowRes })
      case 'share':
        return await share(data)
      case 'home':
        const home = data.to as string
        return redirect(home)
      case 'profile':
        const profile = data.to as string
        return redirect(profile)
      case 'logout':
        return logout(request)
      case 'otherProfile':
        const otherProfile = data.to as string
        return redirect(otherProfile)
      default:
        return json({
          error: 'Invalid follow action',
        })
    }
  } catch (error) {
    return json({ error: `Failed to ${data._action} user` })
  }
}
