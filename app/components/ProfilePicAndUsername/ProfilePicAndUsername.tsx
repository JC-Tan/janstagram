import ProfilePicture from '../ProfilePicture/ProfilePicture'
import Box from '../Ui/Box/Box'
import Flex from '../Ui/Flex/Flex'
import Text from '../Ui/Text/Text'

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
        <Text>{username}</Text>
      </Box>
    </Flex>
  )
}

export default ProfilePicAndUsername
