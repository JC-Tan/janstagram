import Flex from '../Ui/Flex'
import Text from '../Ui/Text/Text'

interface IBio {
  bio?: string | null
  firstname: string
  lastname: string
}

const Bio = ({ bio, firstname, lastname }: IBio) => {
  return (
    <Flex alignItems='flex-start' flexDirection='column'>
      <Text>
        {firstname} {lastname}
      </Text>
      <Text>{bio ?? ''}</Text>
    </Flex>
  )
}

export default Bio
