import Input from "./Input"

export default {
  component: Input,
  title: "Input",
  argTypes: { onChange: { action: "Changed input" } },
}

const _Input = () => <Input placeholder="Enter something" />

export const Default = _Input.bind({})
