import Flex from '../Ui/Flex/Flex'
import Image from '../Ui/Image/Image'

interface IPost {
  post: any
  url: string
}
const Post = ({ post, url }: IPost) => {
  return (
    <Flex flexDirection='row'>
      <Flex>
        <Image url={url} />
      </Flex>
    </Flex>
  )
}

export default Post
