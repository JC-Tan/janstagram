import { useMatches } from '@remix-run/react'
import Sidebar from '~/components/Sidebar'
import Flex from '~/components/Ui/Flex'
import Profile from '~/components/Profilepage'
import { ActionArgs, json } from '@remix-run/node'
import styled from '@emotion/styled'
import { share } from '~/actions/share/share'

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData()
  const data = JSON.parse(form.get('json') as string)

  try {
    switch (data._action) {
      case 'share':
        return await share(data)
      default:
        return json({
          error: 'Invalid follow action',
        })
    }
  } catch (error) {
    return json({ error: `Failed to ${data._action} user` })
  }
}

const OverflowFlex = styled(Flex)`
  overflow: scroll;
`

const ProfileRoute = () => {
  const { user, ENV } = useMatches()[0].data

  if (!user) {
    return
  }

  return (
    <Flex height='100%'>
      <Sidebar supabaseUrl={ENV.SUPABASE_URL} supabaseKey={ENV.SUPABASE_KEY} />
      <OverflowFlex width='100%' justifyContent='center'>
        <Flex flexDirection='column'>
          <Profile
            isMyProfile={true}
            {...user}
            supabaseUrl={ENV.SUPABASE_URL}
            supabaseKey={ENV.SUPABASE_KEY}
          />
        </Flex>
      </OverflowFlex>
    </Flex>
  )
}

export default ProfileRoute
