import { LoaderArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import Sidebar from '~/components/Sidebar/Sidebar'
import Flex from '~/components/Ui/Flex/Flex'
import Text from '~/components/Ui/Text/Text'
import { findUserByUsername } from '~/server/features/userSearch.server'

export const loader = async ({ params }: LoaderArgs) => {
  const username = params.username as string
  const user = await findUserByUsername(username)
  if (!user) {
    return json({ error: `No username ${username} found` })
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
