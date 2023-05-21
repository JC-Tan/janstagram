import { Flex, Text } from 'pcln-design-system'
import { useEffect, useState } from 'react'

interface IPosts {
  posts?: any[]
  followers?: any[]
  following?: any[]
}

const PostsAndFollow = ({ posts, followers, following }: IPosts) => {
  const [numPosts, setNumPosts] = useState(posts?.length || 0)
  const [numFollowers, setNumFollowers] = useState(followers?.length || 0)
  const [numFollowing, setNumFollowing] = useState(following?.length || 0)

  useEffect(() => {
    setNumPosts(posts?.length || 0)
  }, [posts])

  useEffect(() => {
    setNumFollowers(followers?.length || 0)
  }, [followers])

  useEffect(() => {
    setNumFollowing(following?.length || 0)
  }, [following])

  return (
    <Flex flexDirection='row' mb={20}>
      <Text mr={20}>{numPosts} posts</Text>
      <Text mx={20}>{numFollowers} followers</Text>
      <Text>{numFollowing} following</Text>
    </Flex>
  )
}

export default PostsAndFollow
