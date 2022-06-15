const themeColors = {
  black: "#000055",
  white: "#ffffff",
  purple: "#7E0ECF",
  yellow: "#FFCA0F",
  gray: {
    900: "070757",
    800: "#202068",
    700: "#393979",
    600: "#515189",
    500: "#6a6a9a",
    400: "#8383ab",
    300: "#9c9cbc",
    200: "#b5b5cd",
    100: "#cdcddd",
    50: "#e6e6ee",
    lightest: "#E6E6E6", // Naming convention should be changed once we have all correct gray shades. Probably in above manner.
    lighter: "#E9E8ED",
    dark: "#B4B4B4",
  },
  blue: { normal: "#28249B" },
  red: "red",
}

export const colors = {
  // Theme Colors
  ...themeColors,

  // Named colors
  error: themeColors.red,
  info: themeColors.gray["600"],

  gradients: {
    main: {
      fallback: "#7d0ecf",
      gradient: "linear-gradient(45deg, #7d0ecf 15%, #09aeff 80%)",
    },
  },
}
