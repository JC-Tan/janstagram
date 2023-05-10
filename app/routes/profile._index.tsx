import { useMatches } from '@remix-run/react'
import Sidebar from '~/components/Sidebar'
import Flex from '~/components/Ui/Flex'
import Profile from '~/components/Profilepage'

const ProfileRoute = () => {
  const { user } = useMatches()[0].data

  if (!user) {
    return
  }
  return (
    <Flex height='100%'>
      <Sidebar />
      <Flex width='100%' justifyContent='center'>
        <Flex flexDirection='column'>
          <Profile isMyProfile={true} {...user} />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ProfileRoute
