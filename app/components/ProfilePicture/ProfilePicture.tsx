import Flex from '../Ui/Flex'
import Image from '../Ui/Image/Image'

interface IProfilePictureProps {
  url?: string
  onClick?: (...args: any) => any
}

const ProfilePicture = ({ url }: IProfilePictureProps) => {
  return (
    <Flex
      height='150px'
      width='300px'
      justifyContent='center'
      alignItems='center'
    >
      <Image height='150px' width='150px' url={url ? url : '/defaultPfP.jpg'} />
    </Flex>
  )
}

export default ProfilePicture
