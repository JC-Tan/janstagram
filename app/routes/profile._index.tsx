import { LoaderArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import Sidebar from '~/components/Sidebar'
import Flex from '~/components/Ui/Flex'
import { getUser } from '~/server/auth.server'
import Profile from '~/components/Profilepage'

export const loader = async ({ request }: LoaderArgs) => {
  const user = await getUser(request)
  if (!user) {
    return json({ error: 'Something went wrong!' })
  }
  return json({ user })
}
const ProfileRoute = () => {
  let { user } = useLoaderData()
  return (
    <Flex height='100%'>
      <Sidebar />
      <Flex flexDirection='column'>
        <Profile
          id={user.id}
          bio={user.bio}
          profilePic={user.pro}
          userName={user.userName}
          firstName={user.firstName}
          lastName={user.lastName}
        />
      </Flex>
    </Flex>
  )
}

export default ProfileRoute
