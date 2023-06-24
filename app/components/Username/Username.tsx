import { useEffect, useState } from 'react'
import Button from '../Ui/Button/Button'
import Flex from '../Ui/Flex/Flex'
import Text from '../Ui/Text/Text'
import { Form, useFetcher, useMatches } from '@remix-run/react'
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
  const fetcher = useFetcher()

  useEffect(() => {
    const isFollowing = followers?.find((profile) => profile.id === user.id)
    !isMyProfile
      ? setButtonText(isFollowing ? 'Unfollow' : 'Follow')
      : setButtonText('Edit profile')
  }, [followers])

  useEffect(() => {
    console.log(fetcher.data)
  }, [fetcher.data])

  const handleFollow = () => {
    const data = new FormData()
    data.append(
      'json',
      JSON.stringify({
        _action: buttonText,
        userId: user.id,
        id: id,
      })
    )

    fetcher.submit(data, { method: 'post' })
  }
  return (
    <Flex alignItems='center'>
      <Text fontSize={20} fontWeight={400}>
        {username}
      </Text>
      <Button
        type='submit'
        name='_action'
        value={buttonText}
        height='32px'
        ml={20}
        onClick={handleFollow}
      >
        {buttonText}
      </Button>
    </Flex>
  )
}

export default Username
