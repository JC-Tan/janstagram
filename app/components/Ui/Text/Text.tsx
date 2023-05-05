import { color, compose, layout, space, typography } from 'styled-system'
import styled from '@emotion/styled'

const Text = styled('div')(compose(color, layout, space, typography))

export default Text
