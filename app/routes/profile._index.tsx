import { useMatches } from '@remix-run/react'
import Sidebar from '~/components/Sidebar'
import Flex from '~/components/Ui/Flex'
import Profile from '~/components/Profilepage'
import { ActionArgs } from '@remix-run/node'
import { deletePost, post } from '~/server/features/post/post.server'

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData()
  const action = form.get('_action')
  let userId = form.get('userId')
  let url = form.get('uploadUrl')
  let bio = form.get('bio')

  console.log('userId in action:', userId)
  if (action === 'share') {
    userId = userId as string
    url = url as string
    bio = bio as string
    return await post(userId, url, bio)
  }
  if (action === 'delete') {
    userId = userId as string
    return await deletePost(userId)
  }
  return null
}

const ProfileRoute = () => {
  const { user, ENV } = useMatches()[0].data

  console.log(ENV.SUPABASE_KEY)
  if (!user) {
    return
  }
  return (
    <Flex height='100%'>
      <Sidebar supabaseUrl={ENV.SUPABASE_URL} supabaseKey={ENV.SUPABASE_KEY} />
      <Flex width='100%' justifyContent='center'>
        <Flex flexDirection='column'>
          <Profile
            isMyProfile={true}
            {...user}
            supabaseUrl={ENV.SUPABASE_URL}
            supabaseKey={ENV.SUPABASE_KEY}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ProfileRoute
