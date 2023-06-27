import ProfilePicture from '../ProfilePicture/ProfilePicture'
import StyledLink from '../StyledLink/StyledLink'
import Box from '../Ui/Box/Box'
import Flex from '../Ui/Flex/Flex'

export interface IProfilePicAndUsername {
  url: string
  username: string
}

const ProfilePicAndUsername = ({ url, username }: IProfilePicAndUsername) => {
  return (
    <Flex alignItems='center' flexDirection='row'>
      <ProfilePicture
        fHeight='42px'
        fWidth='42px'
        iHeight='32px'
        iWidth='32px'
        url={url}
      />
      <Box ml={2}>
        <StyledLink
          color='#333333'
          to={`/profile/${username}`}
          text={username}
        />
      </Box>
    </Flex>
  )
}

export default ProfilePicAndUsername
