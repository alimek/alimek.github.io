import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

const appTheme = {
  space: {
    xs: "0.5rem",
    s: "0.75rem",
    m: "1.25rem",
    l: "1.5rem",
    xl: "1.75rem",
    "2xl": "2rem",
    "3xl": "2.25rem",
  },
  colors: {
    border: baseTheme.colors.gray["500"],
    borderLight: baseTheme.colors.gray["200"],
  },
};

export const theme = extendTheme(appTheme);
