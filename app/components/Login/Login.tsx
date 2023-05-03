import Box from "../Ui/Box/Box"
import Button from "../Ui/Button/Button"
import Flex from "../Ui/Flex/Flex"
import Label from "../Ui/Label/Label"
import Input from "../Ui/Input/Input"

const Login = () => {
  return (
    <Box width="300px">
      <Flex flexDirection="column">
        <Flex flexDirection="column" mb={2}>
          <Label mb={1}>Name</Label>
          <Input></Input>
        </Flex>
        <Flex flexDirection="column" mb={2}>
          <Label mb={1}>Something</Label>
          <Input></Input>
        </Flex>
        <Button mb={2}>Click!</Button>
      </Flex>
    </Box>
  )
}

export default Login
