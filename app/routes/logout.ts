import { ActionArgs } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { logout } from '~/server/auth.server'

export const loader = async () => {
  redirect('/')
}
export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData()
  const action = form.get('_action')
  if (action === 'logout') {
    return logout(request)
  }
  return null
}
