import Button from '../Ui/Button/Button'
import Flex from '../Ui/Flex/Flex'
import Text from '../Ui/Text/Text'

interface IUsername {
  username: string | undefined
  buttonText: string
}
const Username = ({ username, buttonText }: IUsername) => {
  return (
    <Flex alignItems='center'>
      <Text fontSize={20} fontWeight={400}>
        {username}
      </Text>
      <Button height='32px' ml={20}>
        {buttonText}
      </Button>
    </Flex>
  )
}

export default Username
