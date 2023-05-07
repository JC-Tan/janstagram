import styled from '@emotion/styled'
import { border, layout, space } from 'styled-system'

interface IImage {
  url?: string
  height?: string
  width?: string
}

const StyledImg = styled('img')(border, layout, space)
const Image = ({ url, ...props }: IImage) => {
  return <StyledImg {...props} src={url} alt={`/Default_pfp.jpg`} />
}

export default Image
