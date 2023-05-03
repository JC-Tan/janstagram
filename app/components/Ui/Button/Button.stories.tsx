import Button, { IButtonProps } from "./Button"

export default {
  component: Button,
  title: "Button",
  argTypes: { onClick: { action: "Button clicked!" } },
}

const _Button = (args: IButtonProps) => <Button {...args}>Click me!</Button>

export const Default = _Button.bind({})
_Button.args = {}
