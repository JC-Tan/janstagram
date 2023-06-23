import styled from '@emotion/styled'
import { ActionArgs, LoaderArgs, json } from '@remix-run/node'
import { useLoaderData, useMatches } from '@remix-run/react'
import Profile from '~/components/Profilepage/Profile'
import Sidebar from '~/components/Sidebar/Sidebar'
import Flex from '~/components/Ui/Flex/Flex'
import Text from '~/components/Ui/Text/Text'
import { follow, unfollow } from '~/server/features/follow/followUser.server'
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

  switch (action) {
    case 'Follow':
      const followRes = await follow(userId, id)
      if (!followRes) {
        return json({
          error: 'Something went wrong with following another user',
        })
      }
      return json({ followRes })
    case 'Unfollow':
      const unfollowRes = await unfollow(userId, id)
      if (!unfollowRes) {
        return json({
          error: 'Something went wrong with unfollowing another user',
        })
      }
      return json({ unfollowRes })
    default:
      return json({
        error: 'Invalid follow action',
      })
  }
}

const OverflowFlex = styled(Flex)`
  overflow: scroll;
`

const ProfileRoute = () => {
  let { otherUser } = useLoaderData()
  const { ENV } = useMatches()[0].data
  return (
    <Flex height='100%'>
      <Sidebar supabaseUrl={ENV.SUPABASE_URL} supabaseKey={ENV.SUPABASE_KEY} />
      <OverflowFlex width='100%' justifyContent='center'>
        <Flex flexDirection='column'>
          {otherUser ? (
            <Profile
              isMyProfile={false}
              {...otherUser}
              supabaseUrl={ENV.SUPABASE_URL}
              supabaseKey={ENV.SUPABASE_KEY}
            />
          ) : (
            <Text>User does not exist. This should have its own page</Text>
          )}
        </Flex>
      </OverflowFlex>
    </Flex>
  )
}
export default ProfileRoute
