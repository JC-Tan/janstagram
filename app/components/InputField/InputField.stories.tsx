import InputField, { IInputField } from "./InputField"

export default {
  component: InputField,
  title: "InputField",
  args: {
    htmlFor: "Test",
    label: "InputField",
    onChange: () => {},
  },
  argTypes: { onChange: { action: "Changed input" } },
}

const _InputField = (args: IInputField) => <InputField {...args} />

export const Default = _InputField.bind({})
