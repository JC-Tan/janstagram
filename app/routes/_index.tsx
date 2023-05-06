import { DataFunctionArgs, redirect } from '@remix-run/node'
import { requireUserId } from '../server/auth.server'
import Flex from '~/components/Ui/Flex/Flex'
import { Form } from '@remix-run/react'
import Button from '~/components/Ui/Button/Button'

export const loader = async ({ request }: DataFunctionArgs) => {
  const res = await requireUserId(request)
  if (!res) {
    return redirect('/login')
  }
  return null
}

export default function Index() {
  // Temporary!
  return (
    <Flex>
      <Form action='/logout' method='post'>
        <Button name='_action' value='logout' type='submit'>
          Log out
        </Button>
      </Form>
    </Flex>
  )
}
