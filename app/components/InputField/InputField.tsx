import Input from "../Ui/Input/Input"
import Label from "../Ui/Label/Label"
import Flex from "../Ui/Flex/Flex"

export interface IInputField {
  htmlFor: string
  label: string
  type?: string
  onChange?: (text: string) => void
}

const InputField = ({ htmlFor, label, type, onChange }: IInputField) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    onChange?.(e.currentTarget.value)
  }
  return (
    <Flex flexDirection="column" mb={2}>
      <Label color="#c0cad5" fontSize={12} htmlFor={htmlFor} mb={1}>
        {label}
      </Label>
      <Input
        data-testid={htmlFor}
        id={htmlFor}
        type={type}
        onChange={handleChange}
      ></Input>
    </Flex>
  )
}

export default InputField
