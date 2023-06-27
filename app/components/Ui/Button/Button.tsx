import styled from '@emotion/styled'
import {
  border,
  buttonStyle,
  color,
  compose,
  layout,
  space,
  typography,
  variant,
} from 'styled-system'
import { ReactNode } from 'react'
import { IMainProps } from '../IMainProps'
import theme from '../theme'

export interface IButtonProps extends IMainProps {
  variant?: string
  onClick?: (...args: any) => any
  children?: ReactNode
}

const StyledButton = styled('button')(
  compose(border, buttonStyle, color, layout, space, typography),
  variant(theme)
)

const Button = ({ variant, onClick, children, ...props }: IButtonProps) => {
  return (
    <StyledButton variant={variant} {...props} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

StyledButton.defaultProps = {
  variant: 'primary',
}

export default Button
