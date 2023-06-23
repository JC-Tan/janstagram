import { ActionArgs, DataFunctionArgs, redirect } from '@remix-run/node'
import { requireUserId } from '../server/auth.server'
import Homepage from '~/components/Homepage/Homepage'
import { useLoaderData, useMatches } from '@remix-run/react'
import { feed } from '~/server/features/feed/feed.server'
import { json } from '@remix-run/node'

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
  const action = form.get('_action')
  return null
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
