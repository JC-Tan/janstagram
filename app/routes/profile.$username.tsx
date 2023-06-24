import styled from '@emotion/styled'
import { LoaderArgs, json } from '@remix-run/node'
import { useLoaderData, useMatches } from '@remix-run/react'
import { otherProfileAction } from '~/actions/otherProfile/otherProfile'
import Profile from '~/components/Profilepage/Profile'
import Sidebar from '~/components/Sidebar/Sidebar'
import Flex from '~/components/Ui/Flex/Flex'
import Text from '~/components/Ui/Text/Text'
import { findUserByUsername } from '~/server/features/search/userSearch.server'

export const loader = async ({ params }: LoaderArgs) => {
  const username = params.username as string
  const otherUser = await findUserByUsername(username)
  if (!otherUser) {
    return json({ error: `No username ${username} found` })
  }
  return json({ otherUser })
}

export const action = otherProfileAction

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
