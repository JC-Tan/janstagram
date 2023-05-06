import { DataFunctionArgs, redirect } from '@remix-run/node'
import { requireUserId } from '../server/auth.server'
import Homepage from '~/components/Homepage/Homepage'

export const loader = async ({ request }: DataFunctionArgs) => {
  const res = await requireUserId(request)
  if (!res) {
    return redirect('/login')
  }
  return null
}

export default function Index() {
  return <Homepage />
}
