import styled from '@emotion/styled'
import Box from '../Ui/Box/Box'
import Flex from '../Ui/Flex'
import Image from '../Ui/Image/Image'

interface IProfilePictureProps {
  fHeight?: string
  fWidth?: string
  iHeight?: string
  iWidth?: string
  url?: string
  onClick?: (...args: any) => any
}

const ProfilePicture = ({
  fHeight = '150px',
  fWidth = '300px',
  iHeight = '150px',
  iWidth = '150px',
  url,
}: IProfilePictureProps) => {
  return (
    <Flex
      alignItems='center'
      height={fHeight}
      justifyContent='center'
      width={fWidth}
    >
      <Flex
        alignItems='center'
        border='1px solid'
        borderRadius='50%'
        justifyContent='center'
        overflow='hidden'
      >
        <Image
          height={iHeight}
          url={url ? url : '/defaultPfP.jpg'}
          width={iWidth}
        />
      </Flex>
    </Flex>
  )
}

export default ProfilePicture
