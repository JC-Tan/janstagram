import Button, { IButtonProps } from '../Ui/Button/Button'
import Flex from '../Ui/Flex/Flex'
import Text from '../Ui/Text/Text'
import Image from '../Ui/Image/Image'

interface IButtonIcon extends IButtonProps {
  buttonLabel: string
  isProfileTab?: boolean
  url: string
  value: string
  variant?: string
  onClick: (...args: any) => any
}

const ButtonIcon = ({
  buttonLabel,
  isProfileTab = false,
  url,
  value,
  variant = 'secondary',
  onClick,
  ...props
}: IButtonIcon) => {
  return (
    <Flex py={12} pr={12}>
      <Button
        name='_action'
        value={value}
        variant={variant}
        width='100%'
        onClick={onClick}
        {...props}
      >
        <Flex alignItems='center'>
          <Flex
            alignItems='center'
            borderRadius={isProfileTab ? '50%' : '0%'}
            overflow='hidden'
          >
            <Image width='24px' height='24px' url={url} />
          </Flex>
          {buttonLabel && <Text ml={3}>{buttonLabel}</Text>}
        </Flex>
      </Button>
    </Flex>
  )
}

export default ButtonIcon
