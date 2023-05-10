import Flex from '../Ui/Flex/Flex'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import { User } from '@prisma/client'
import PostsAndFollow from '../PostsAndFollow/PostsAndFollow'
import Bio from '../Bio/Bio'
import Username from '../Username/Username'
import Box from '../Ui/Box/Box'

interface IProfile extends Omit<User, 'createdAt' | 'passwordHash' | 'email'> {
  followers?: any
  following?: any
  isMyProfile: boolean
  posts?: any
}

const Profile = ({
  bio,
  firstName,
  followers,
  following,
  id,
  isMyProfile,
  lastName,
  posts,
  userName,
}: IProfile) => {
  return (
    <Flex height='150px' alignItems='center' mb={44}>
      <ProfilePicture />
      <Flex alignItems='stretch' flex='2 1 30px' flexDirection='column'>
        <Username
          id={id}
          username={userName}
          isMyProfile={isMyProfile}
          followers={followers}
        />
        <Box mb={20} />
        <PostsAndFollow
          followers={followers}
          following={following}
          posts={posts}
        />
        <Bio
          bio='TEST TEST TEST TEST'
          firstname={firstName}
          lastname={lastName}
        />
      </Flex>
    </Flex>
  )
}

export default Profile
