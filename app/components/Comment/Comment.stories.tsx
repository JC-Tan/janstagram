import Flex from '../Ui/Flex/Flex'
import Comment, { IComment } from './Comment'
export default {
  component: Comment,
  title: 'Comment',
  decorators: [
    (Story) => (
      <Flex
        height='600px'
        border='1px solid black'
        borderRadius={6}
        overflowY='auto'
      >
        <Story />
      </Flex>
    ),
  ],
  argTypes: {},
}

const _Comment = (args: IComment) => (
  <Comment
    imgUrl='/pikachu.png'
    username='tanjc'
    words='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Velit ut tortor pretium viverra suspendisse potenti nullam. Diam vulputate ut pharetra sit amet aliquam id. 
    Senectus et netus et malesuada. Quis eleifend quam adipiscing vitae proin sagittis nisl. Morbi tempus iaculis urna id. 
    Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. 
    Viverra justo nec ultrices dui sapien eget mi. Pharetra sit amet aliquam id diam maecenas ultricies mi. 
    Pulvinar pellentesque habitant morbi tristique senectus et netus et. 
    Tempor orci eu lobortis elementum nibh tellus molestie nunc non. 
    Diam quam nulla porttitor massa. Arcu bibendum at varius vel pharetra vel turpis nunc eget. 
    Lobortis feugiat vivamus at augue eget arcu dictum varius duis.
    Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. 
    Hendrerit gravida rutrum quisque non tellus orci ac. 
    Arcu bibendum at varius vel pharetra vel. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus.'
  />
)

export const Default = _Comment.bind({})
_Comment.args = {}
