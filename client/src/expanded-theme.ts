// eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    [key: number]: string;
  }
// this is where MUI and CSS connect because palette does not have a tertiary color feature so its added in the theme.ts file linked by the expanded-theme.ts file
  interface Palette {
    tertiary: PaletteColor;
  }
}