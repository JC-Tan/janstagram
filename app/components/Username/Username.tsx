import { useEffect, useState } from 'react'
import Button from '../Ui/Button/Button'
import Flex from '../Ui/Flex/Flex'
import Text from '../Ui/Text/Text'
import { Form, useMatches } from '@remix-run/react'
import Input from '../Ui/Input/Input'

interface IUsername {
  followers?: any[]
  id: string
  isMyProfile: boolean
  username: string | undefined
}

const Username = ({ followers, id, isMyProfile, username }: IUsername) => {
  const [buttonText, setButtonText] = useState('Edit profile')
  const { user } = useMatches()[0].data

  useEffect(() => {
    isMyProfile ? setButtonText('Edit profile') : setButtonText('follow')
  }, [isMyProfile])

  useEffect(() => {
    const isFollowing = followers?.find((profile) => profile.id === user.id)
    if (isFollowing) {
      setButtonText('Unfollow')
    }
  })
  return (
    <Flex alignItems='center'>
      <Text fontSize={20} fontWeight={400}>
        {username}
      </Text>
      {/* Switch this with useFetcher */}
      <Form method='post'>
        <Input name='id' value={id} hidden readOnly />
        <Input name='userId' value={user.id} hidden readOnly />
        <Button
          type='submit'
          name='_action'
          value='follow'
          height='32px'
          ml={20}
        >
          {buttonText}
        </Button>
      </Form>
    </Flex>
  )
}

export default Username
