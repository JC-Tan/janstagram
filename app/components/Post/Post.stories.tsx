import Box from '../Ui/Box/Box'
import Post, { IPost } from './Post'
export default {
  component: Post,
  title: 'Post',
  decorators: [
    (Story) => (
      <Box
        width='900px'
        height='900px'
        border='1px solid black'
        borderRadius={6}
      >
        <Story />
      </Box>
    ),
  ],
  argTypes: {},
}

const _Post = (args: IPost) => (
  <Post
    post={{ caption: 'Hello luv', createdAt: 'date' }}
    imgUrl='/pikachu.png'
    profImgUrl='/pikachu.png'
    username='tanjc'
  />
)

export const Default = _Post.bind({})
_Post.args = {}
