/**
 * default.theme.js
 * https://chakra-ui.com/docs/styled-system/theming/theme
 */
import { extendTheme } from "@chakra-ui/react"

const fontSizes = {
  base: "1rem",
  xs: "0.5rem",
  sm: "0.75rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "3rem",
}

const theme = extendTheme({ fontSizes })

export default theme
