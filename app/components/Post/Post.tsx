import Comment from '../Comment/Comment'
import ProfilePicAndUsername from '../ProfilePicAndUsername/ProfilePicAndUsername'
import Box from '../Ui/Box/Box'
import Flex from '../Ui/Flex/Flex'
import Image from '../Ui/Image/Image'
import Text from '../Ui/Text/Text'

export interface IPost {
  post: { caption: string; createdAt: string }
  imgUrl: string
  profImgUrl: string
  username: string
}
const Post = ({ post, imgUrl, profImgUrl, username }: IPost) => {
  return (
    <Flex flexDirection='row' width='100%' height='100%' flex='1 1 auto'>
      <Flex justifyContent='center' width='66%' bg='black'>
        <Image url={imgUrl} />
      </Flex>
      <Flex width='33%' flexDirection='column'>
        <Box p={3}>
          <ProfilePicAndUsername
            url={profImgUrl ? profImgUrl : '/defaultPfP.jpg'}
            username={username}
          />
        </Box>
        <Flex flexDirection='column' px={3} pb={3}>
          {post?.caption ? (
            <Comment
              imgUrl={profImgUrl}
              username={username}
              words={post?.caption}
            />
          ) : (
            <Text>No Caption or Comments Yet</Text>
          )}
          <Text>{post?.createdAt}</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Post
