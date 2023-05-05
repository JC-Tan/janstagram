import styled from "@emotion/styled"
import {
  border,
  color,
  compose,
  space,
  typography,
  FontSizeProps,
  FontWeightProps,
  SizeProps,
  SpaceProps,
  TextAlignProps,
  WidthProps,
} from "styled-system"

export interface ILabelProps
  extends FontSizeProps,
    FontWeightProps,
    SizeProps,
    SpaceProps,
    TextAlignProps,
    WidthProps,
    React.LabelHTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode | string
}

const StyledLabel = styled("label")(compose(border, color, space, typography))

const Label = ({ children, ...props }: ILabelProps) => {
  return <StyledLabel {...props}>{children}</StyledLabel>
}

Label.defaultProps = {
  width: "100%",
}

export default Label
