import Box from "../Ui/Box/Box"
import Button from "../Ui/Button/Button"
import Flex from "../Ui/Flex/Flex"
import { Form } from "@remix-run/react"
import InputField from "../InputField/InputField"

const Login = () => {
  return (
    <Box height="100%">
      <Flex justifyContent="center" alignItems="center">
        <Flex flexDirection="column">
          <Form method="post">
            <InputField htmlFor="username" label="Username" />
            <InputField htmlFor="username" label="Password" />
            <Button mb={2}>Log in</Button>
          </Form>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Login
