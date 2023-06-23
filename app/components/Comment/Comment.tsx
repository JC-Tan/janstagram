import styled from '@emotion/styled'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import Box from '../Ui/Box/Box'
import Flex from '../Ui/Flex/Flex'
import Text from '../Ui/Text/Text'

export interface IComment {
  imgUrl: string
  username: string
  words: string
}

const TextWrap = styled(Text)`
  word-break: break-all;
`

const Comment = ({ imgUrl, username, words }: IComment) => {
  return (
    <Flex flexDirection='row' pt='5px' pr={3}>
      <Box pr={2}>
        <ProfilePicture
          fHeight='42px'
          fWidth='42px'
          iHeight='32px'
          iWidth='32px'
          url={imgUrl}
        />
      </Box>
      <Flex flexDirection='column'>
        <TextWrap>{username}</TextWrap>
        <TextWrap>{words}</TextWrap>
      </Flex>
    </Flex>
  )
}

export default Comment
