import { ActionArgs, LoaderArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import Profile from '~/components/Profilepage/Profile'
import Sidebar from '~/components/Sidebar/Sidebar'
import Flex from '~/components/Ui/Flex/Flex'
import { follow } from '~/server/features/follow/followUser.server'
import { findUserByUsername } from '~/server/features/search/userSearch.server'

export const loader = async ({ params }: LoaderArgs) => {
  const username = params.username as string
  const otherUser = await findUserByUsername(username)
  if (!otherUser) {
    return json({ error: `No username ${username} found` })
  }
  return json({ otherUser })
}

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData()
  const action = form.get('_action')
  const id = form.get('id') as string
  const userId = form.get('userId') as string

  if (action === 'follow') {
    const res = await follow(userId, id)

    if (!res) {
      return json({ error: 'Something went wrong with following another user' })
    }

    return json({ res })
  }
  return null
}

const ProfileRoute = () => {
  let { otherUser } = useLoaderData()
  return (
    <Flex height='100%'>
      <Sidebar />
      <Flex flexDirection='column'>
        <Profile
          bio={otherUser.bio}
          firstName={otherUser.firstName}
          id={otherUser.id}
          isMyProfile={false}
          lastName={otherUser.lastName}
          profilePic={otherUser.pro}
          userName={otherUser.userName}
        />
      </Flex>
    </Flex>
  )
}
export default ProfileRoute
