import styled from "@emotion/styled"
import {
  border,
  color,
  compose,
  layout,
  space,
  typography,
} from "styled-system"
import { ReactNode } from "react"

interface IButtonProps {
  onClick?: () => void
  children?: ReactNode
}

const StyledButton = styled("button")(
  compose(border, color, layout, space, typography)
)

const Button = ({ onClick, children, ...props }: IButtonProps) => {
  return (
    <StyledButton {...props} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

StyledButton.defaultProps = {
  border: "none",
  borderRadius: "8px",
  bg: "#0095f6",
  color: "#ffffff",
  padding: "7px 16px",
  fontSize: "14px",
}

export default Button
