import Input, { IInputProps } from "./Input"

export default {
  component: Input,
  title: "Input",
  args: {
    placeholder: "Enter something",
  },
  argTypes: { onChange: { action: "Changed input" } },
}

const _Input = (args: IInputProps) => <Input {...args} />

export const Default = _Input.bind({})
