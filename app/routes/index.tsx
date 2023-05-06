import { DataFunctionArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { requireUserId } from '~/server/auth.server'

export const loader = async ({ request }: DataFunctionArgs) => {
  await requireUserId(request)
  return null
}
export default function Index() {
  return <div></div>
}
