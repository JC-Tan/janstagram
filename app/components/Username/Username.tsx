import { useEffect, useState } from 'react'
import { Button, Flex, Input, Text } from 'pcln-design-system'
import { Form, useMatches } from '@remix-run/react'

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
    isMyProfile ? setButtonText('Edit profile') : setButtonText('Follow')
  }, [isMyProfile])

  useEffect(() => {
    const isFollowing = followers?.find((profile) => profile.id === user.id)
    !isMyProfile && setButtonText(isFollowing ? 'Unfollow' : 'Follow')
  }, [followers])

  return (
    <Flex alignItems='center'>
      <Text fontSize={20} fontWeight={400}>
        {username}
      </Text>
      {/* Switch this with useFetcher */}
      <Form method='post'>
        <Input name='id' value={id} type='hidden' readOnly />
        <Input name='userId' value={user.id} type='hidden' readOnly />
        <Button type='submit' name='_action' value={buttonText} ml={20}>
          {buttonText}
        </Button>
      </Form>
    </Flex>
  )
}

export default Username
