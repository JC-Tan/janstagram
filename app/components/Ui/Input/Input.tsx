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

export interface IInputProps extends IMainProps {
  borderRadius?: number
  border?: string
  onChange?: (...args: any) => any
}

const StyledInput = styled('input')(
  compose(border, color, layout, space, typography)
)

const Input: React.FC<IInputProps> = (props: IInputProps) => {
  const { onChange, ...otherProps } = props
  return <StyledInput onChange={onChange} {...otherProps} />
}

Input.defaultProps = {
  borderRadius: 6,
  border: '1px solid #001833',
  padding: '6px 6px 6px 6px',
  fontSize: 2,
}

export default Input
