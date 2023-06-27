import ButtonIcon from '../ButtonIcon/ButtonIcon'
import GridElement from '../GridElement'
import ProfilePicAndUsername from '../ProfilePicAndUsername/ProfilePicAndUsername'
import Flex from '../Ui/Flex/Flex'
import { useState } from 'react'
import StyledLink from '../StyledLink/StyledLink'
import Text from '../Ui/Text/Text'
import styled from '@emotion/styled'

interface IFeedElement {
  idx: number
  iUrl: string
  feedElement: any
}

const TextWrap = styled(Text)`
  word-break: break-all;
`

const FeedElement = ({ idx, iUrl, feedElement }: IFeedElement) => {
  const [user, setUser] = useState(feedElement?.user)
  return (
    <Flex
      borderBottom='1px solid #DBDBDB'
      flexDirection='column'
      m='24px'
      pb={3}
      width='400px'
    >
      <Flex ml={-1} pb='12px'>
        <ProfilePicAndUsername url={user.profilePic} username={user.userName} />
      </Flex>
      <Flex>
        <GridElement
          height='400px'
          index={idx}
          width='400px'
          url={iUrl}
          onClick={() => {}}
        />
      </Flex>
      <Flex flexDirection='column'>
        <ButtonIcon
          url='/icons/heartEmpty.png'
          buttonLabel=''
          value='like'
          variant='like'
          onClick={() => {}}
        />
        <Flex flexDirection='row'>
          <TextWrap fontSize={14}>
            <StyledLink
              color='#333333'
              to={`/profile/${user.userName}`}
              text={user.userName}
            />
            {`  ${feedElement.caption}`}
          </TextWrap>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default FeedElement
