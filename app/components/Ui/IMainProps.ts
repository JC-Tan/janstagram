import {
  BorderRadiusProps,
  BoxShadowProps,
  DisplayProps,
  FontSizeProps,
  HeightProps,
  MaxHeightProps,
  MaxWidthProps,
  MinHeightProps,
  MinWidthProps,
  SizeProps,
  SpaceProps,
  TextAlignProps,
  WidthProps,
} from "styled-system"
import React from "react"

export interface IMainProps
  extends BorderRadiusProps,
    BoxShadowProps,
    DisplayProps,
    FontSizeProps,
    HeightProps,
    MaxHeightProps,
    MaxWidthProps,
    MinHeightProps,
    MinWidthProps,
    SizeProps,
    SpaceProps,
    TextAlignProps,
    WidthProps,
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "size" | "height" | "width"
    > {}
