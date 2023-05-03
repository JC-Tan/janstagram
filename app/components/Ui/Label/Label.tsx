import styled from "@emotion/styled"
import { border, color, compose, space, typography } from "styled-system"
import { IMainProps } from "../IMainProps"

export interface ILabelProps extends IMainProps {
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
