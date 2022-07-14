import { extendTheme, theme as baseTheme } from "@chakra-ui/react";
import { Link } from "./Link";

const appTheme = {
  space: {
    xs: "0.5rem",
    s: "0.75rem",
    m: "1.25rem",
    l: "1.5rem",
    xl: "2rem",
    "2xl": "2.5rem",
    "3xl": "3.5rem",
  },
  colors: {
    primary: "#489C9C",
    border: baseTheme.colors.gray["500"],
    borderLight: baseTheme.colors.gray["200"],
  },
  breakpoints: {
    sm: "25em",
    md: "40em",
    lg: "80em",
    xl: "96em",
  },
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  components: {
    Link,
  },
};

export const theme = extendTheme(appTheme);
