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
      <Flex flexDirection='column'>
        <Profile
          bio={user.bio}
          id={user.id}
          isMyProfile={true}
          firstName={user.firstName}
          lastName={user.lastName}
          profilePic={user.pro}
          userName={user.userName}
        />
      </Flex>
    </Flex>
  )
}

export default ProfileRoute
