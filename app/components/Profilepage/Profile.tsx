import { RegisterForm } from '~/server/types.server'
import Flex from '../Ui/Flex/Flex'
import ProfilePicture from '../ProfilePicture/ProfilePicture'

interface IProfileProps extends Omit<RegisterForm, 'password' | 'email'> {
  bio?: string
  picUrl?: string
}

const Profile = ({ firstName, lastName, username }: IProfileProps) => {
  return (
    <Flex>
      <ProfilePicture />
    </Flex>
  )
}

export default Profile
