import Label, { ILabelProps } from "./Label"

export default {
  component: Label,
  title: "Label",
  args: {
    children: "This is a label",
    fontSize: 2,
    color: "#c0cad5",
  },
}

const _Label = (args: ILabelProps) => <Label {...args} />

export const Default = _Label.bind({})
