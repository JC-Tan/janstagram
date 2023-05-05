import Input from '../Ui/Input/Input'
import Label from '../Ui/Label/Label'
import Flex from '../Ui/Flex/Flex'

export interface IInputField {
  htmlFor: string
  label: string
  type?: string
  value?: string
  onChange?: (...args: any) => any
}

const InputField = ({ htmlFor, label, type, value, onChange }: IInputField) => {
  return (
    <Flex flexDirection='column' mb={2}>
      <Label color='#c0cad5' fontSize={12} htmlFor={htmlFor} mb={1}>
        {label}
      </Label>
      <Input
        data-testid={htmlFor}
        id={htmlFor}
        name={htmlFor}
        type={type}
        onChange={onChange}
        value={value}
      ></Input>
    </Flex>
  )
}

export default InputField
