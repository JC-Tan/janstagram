import { ActionArgs, DataFunctionArgs, redirect } from '@remix-run/node'
import { requireUserId } from '../server/auth.server'
import Homepage from '~/components/Homepage/Homepage'
import { useLoaderData, useMatches } from '@remix-run/react'
import { feed } from '~/server/features/feed/feed.server'
import { json } from '@remix-run/node'
import { share } from '~/actions/share/share'
import { logout } from '../server/auth.server'

export const loader = async ({ request }: DataFunctionArgs) => {
  const res = await requireUserId(request)
  const feedRes = await feed(res)

  if (!res) {
    return redirect('/login')
  }
  return json({ feedRes })
}

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData()
  const data = JSON.parse(form.get('json') as string)

  console.log(data)
  try {
    switch (data._action) {
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

export default function Index() {
  const { user, ENV } = useMatches()[0].data
  const { feedRes } = useLoaderData()

  return (
    <Homepage
      supabaseKey={ENV.SUPABASE_KEY}
      supabaseUrl={ENV.SUPABASE_URL}
      feedRes={feedRes}
      {...user}
    />
  )
}
