import Flex from '../Ui/Flex/Flex'
import Input from '../Ui/Input/Input'
import Label from '../Ui/Label/Label'
import Text from '../Ui/Text/Text'
import { useEffect, useState } from 'react'

export interface IInputField {
  error?: string
  htmlFor: string
  label: string
  type?: string
  value?: string
  onChange?: (...args: any) => any
}

const InputField = ({
  error = '',
  htmlFor,
  label,
  type,
  value,
  onChange,
}: IInputField) => {
  const [errorText, setErrorText] = useState(error)

  useEffect(() => {
    setErrorText(error)
  }, [error])

  const handleChange = (e: any) => {
    onChange?.(e)
    setErrorText('')
  }

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
        onChange={handleChange}
        value={value}
      ></Input>
      {errorText && <Text>{errorText}</Text>}
    </Flex>
  )
}

export default InputField
