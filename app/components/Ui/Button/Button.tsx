import styled from "@emotion/styled"
import {
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  space,
  typography,
} from "styled-system"
import { ReactNode } from "react"

interface IButtonProps {
  children?: ReactNode
  [props: string]: any
}

const StyledButton = styled("button")(
  compose(border, color, flexbox, grid, layout, space, typography)
)

const Button = ({ children, props }: IButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

StyledButton.defaultProps = {
  borderRadius: "8px",
  bg: "#0095f6",
  color: "#ffffff",
}

export default Button
