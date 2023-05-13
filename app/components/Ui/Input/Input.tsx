import styled from '@emotion/styled'
import {
  border,
  color,
  compose,
  layout,
  space,
  typography,
} from 'styled-system'
import { IMainProps } from '../IMainProps'
import React from 'react'

export interface IInputProps
  extends IMainProps,
    React.RefAttributes<HTMLInputElement> {
  borderRadius?: number
  border?: string
  onChange?: (...args: any) => any
}

const StyledInput = styled('input')(
  compose(border, color, layout, space, typography)
)

const Input: React.FC<IInputProps> = React.forwardRef(
  (props: IInputProps, ref) => {
    const { onChange, ...otherProps } = props
    return <StyledInput onChange={onChange} ref={ref} {...otherProps} />
  }
)

Input.defaultProps = {
  borderRadius: 6,
  border: '1px solid #001833',
  padding: '6px 6px 6px 6px',
  fontSize: 2,
}

export default Input
