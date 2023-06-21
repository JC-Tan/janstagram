import styled from '@emotion/styled'
import { border, layout, space } from 'styled-system'

interface IImage {
  url?: string
  height?: string
  width?: string
  onClick?: (...args: any) => any
}

const StyledImg = styled('img')(border, layout, space)
const Image = ({ url, onClick, ...props }: IImage) => {
  return (
    <StyledImg
      {...props}
      src={url ? url : `/defaultPfP.jpg`}
      onClick={onClick}
    />
  )
}

export default Image
