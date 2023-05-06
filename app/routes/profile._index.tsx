import { LoaderArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import Sidebar from '~/components/Sidebar'
import Flex from '~/components/Ui/Flex'
import { getUser } from '~/server/auth.server'
import Text from '~/components/Ui/Text/Text'

export const loader = async ({ request }: LoaderArgs) => {
  const user = await getUser(request)
  if (!user) {
    return json({ error: 'Something went wrong!' })
  }
  return user
}
const ProfileRoute = () => {
  const user = useLoaderData()

  return (
    <Flex height='100%'>
      <Sidebar />
      <Flex flexDirection='column'>
        <Text>{user?.userName}</Text>
        <Text>{user?.email}</Text>
        <Text>{user?.firstName}</Text>
        <Text>{user?.lastName}</Text>
      </Flex>
    </Flex>
  )
}

export default ProfileRoute
