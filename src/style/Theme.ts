import "styled-components";
import {
  CSSObject,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
  css,
} from "styled-components";

export const Theme = {
  colors: {
    blueGreen: "#00A8A6",
    lightBlueGreen: "#A2D6D3",
    lightGray: "#F2F2F2",
    gray: "#9B9B9B",
    white: "#FFFFFF",
    black: "#161616",
    red: "#FD4A4A",
  },
  fontFamily: {
    Noto: "Noto Sans JP, sans-serif",
    Roboto: "Roboto, sans-serif",
  },
  fontWeight: {
    regular: "400",
    medium: "500",
    bold: "700",
  },
  media: {
    desktop: (
      desktop: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation => css`
      @media screen and (min-width: 960px) {
        ${css(desktop, ...interpolations)}
      }
    `,
    tablet: (
      desktop: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation => css`
      @media (min-width: 520px) {
        ${css(desktop, ...interpolations)}
      }
    `,
  },
} as const;

type AppTheme = typeof Theme;

declare module "styled-components" {
  interface DefaultTheme extends AppTheme {}
}
