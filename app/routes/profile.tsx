import { LoaderArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import profile from '~/actions/profile/profile'
import Sidebar from '~/components/Sidebar/Sidebar'
import Flex from '~/components/Ui/Flex'
import Text from '~/components/Ui/Text/Text'
import { getUser } from '~/server/auth.server'

export const loader = async ({ request }: LoaderArgs) => {
  const user = await getUser(request)
  if (!user) {
    return json({ error: 'No user found' }, { status: 400 })
  }
  return json({ user })
}

export const action = profile

const Profile = () => {
  const { user } = useLoaderData()
  console.log(user)
  const username = user?.userName
  const firstName = user?.firstName
  const lastName = user?.lastName
  const bio = user?.bio ?? 'No bio'
  return (
    <Flex height='100%' flexDirection='row'>
      <Sidebar />
      <Flex flexDirection='column'>
        <Text>{username}</Text>
        <Text>{firstName}</Text>
        <Text>{lastName}</Text>
        <Text>{bio}</Text>
      </Flex>
    </Flex>
  )
}

export default Profile
