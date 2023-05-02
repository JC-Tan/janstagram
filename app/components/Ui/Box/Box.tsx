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

const Box = styled("div")(
  compose(border, color, flexbox, grid, layout, space, typography)
)

export default Box
