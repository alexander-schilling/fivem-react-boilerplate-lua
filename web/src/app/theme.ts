import { extendTheme } from "@chakra-ui/react";

const colors = {
  customDark: {
    900: "#141421",
    800: "#1A1A27",
    700: "#1E1E2D",
    600: "#565674",
    500: "#92929f",
    // Copilot made
    400: "#d9d9d9",
    300: "#ececec",
    200: "#f5f5f5",
    100: "#fafafa",
    50: "#fcfcfc",
  },
};

const fonts = {
  heading: "Poppins",
  body: "Poppins",
};

const theme = extendTheme({
  colors,
  fonts,
  styles: {
    global: {
      "html, body": {
        bg: "transparent",
        color: "customDark.300",
      },
    },
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

export default theme;
