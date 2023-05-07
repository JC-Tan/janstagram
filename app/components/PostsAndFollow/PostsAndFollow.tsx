import { User, Post } from '@prisma/client'
import Flex from '../Ui/Flex/Flex'
import Text from '../Ui/Text/Text'
import { useState } from 'react'
import { Link } from '@remix-run/react'

interface IPosts {
  posts?: Post[]
  followers?: User[]
  following?: User[]
}

const PostsAndFollow = ({ posts, followers, following }: IPosts) => {
  const [numPosts, setNumPosts] = useState(posts?.length || 0)
  const [numFollowers, setNumFollowers] = useState(followers?.length || 0)
  const [numFollowing, setNumFollowing] = useState(following?.length || 0)

  return (
    <Flex flexDirection='row' mb={20}>
      <Text mr={20}>{numPosts} posts</Text>
      <Text mx={20}>{numFollowers} followers</Text>
      <Text>{numFollowing} following</Text>
    </Flex>
  )
}

export default PostsAndFollow
