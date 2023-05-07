import { LoaderArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import Profile from '~/components/Profilepage/Profile'
import Sidebar from '~/components/Sidebar/Sidebar'
import Flex from '~/components/Ui/Flex/Flex'
import { findUserByUsername } from '~/server/features/search/userSearch.server'

export const loader = async ({ params }: LoaderArgs) => {
  const username = params.username as string
  const user = await findUserByUsername(username)
  if (!user) {
    return json({ error: `No username ${username} found` })
  }
  console.log('in loader')
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
