declare module "@mui/material/styles/createPalette" {
  interface Palette {
    tertiary: PaletteColor;
    neutral: NeutralColor;
  }
  interface PaletteOptions {
    tertiary?: PaletteColorOptions;
    neutral?: NeutralColorOptions;
  }
  interface SimplePaletteColorOptions {
    onMain: string;
    container: string;
    onContainer: string;
  }
  interface PaletteColor {
    onMain: string;
    container: string;
    onContainer: string;
  }
  interface NeutralColor {
    background: string;
    onBackground: string;
    surface: string;
    onSurface: string;
    surfaceTint: string;
    outline: string;
    outlineVariant: string;
    surfaceVariant: string;
    onSurfaceVariant: string;
    scrim: string;
    inverseOnSurface: string;
    inversePrimary: string;
    inverseSurface: string;
  }
  interface NeutralColorOptions {
    background: string;
    onBackground: string;
    surface: string;
    onSurface: string;
    surfaceTint: string;
    outline: string;
    outlineVariant: string;
    surfaceVariant: string;
    onSurfaceVariant: string;
    scrim: string;
    inverseOnSurface: string;
    inversePrimary: string;
    inverseSurface: string;
  }
  interface TypeText {
    light: string;
    lowEmphasis: string;
    highEmphasis: string;
    heading: string;
    hintCaution: string;
    hintSuccess: string;
    hintNeutral: string;
    hintError: string;
  }
  interface TypeBackground {
    light: string;
    dark: string;
    scrimDark: string;
    scrimLight: string;
    hintCaution: string;
    hintSuccess: string;
    hintNeutral: string;
    hintError: string;
    primary: string;
    secondary: string;
  }
}

const GREY = {
  0: "#121212",
  100: "#1C1C1C",
  200: "#222222",
  300: "#2B2B2B",
  400: "#3A3A3A",
  500: "#535353",
  600: "#737373",
  700: "#8E8E8E",
  800: "#B0B0B0",
  900: "#E0E0E0",
};

const PRIMARY = {
  main: "#D32F2F",
  onMain: "#FFFFFF",
  container: "#4A1F1F",
  onContainer: "#FFD8D8",
};

const SECONDARY = {
  main: "#FF6F00",
  onMain: "#FFFFFF",
  container: "#4A2A00",
  onContainer: "#FFD599",
};

const TERTIARY = {
  main: "#00BFA5",
  onMain: "#FFFFFF",
  container: "#004D40",
  onContainer: "#A7FFEB",
};

const ERROR = {
  main: "#D50000",
  onMain: "#FFFFFF",
  container: "#490000",
  onContainer: "#FFB3B3",
};

const Neutral = {
  background: "#1C1C1C",
  onBackground: "#E0E0E0",
  surface: "#2C2C2C",
  onSurface: "#F5F5F5",
  surfaceTint: "#303F9F",
  outline: "#646464",
  outlineVariant: "#9E9E9E",
  surfaceVariant: "#383838",
  onSurfaceVariant: "#E0E0E0",
  scrim: "#00000099",
  inverseOnSurface: "#0D0D0D",
  inversePrimary: "#FFCDD2",
  inverseSurface: "#212121",
};

const TEXT = {
  light: "#FFFFFF",
  disabled: "#646464",
  lowEmphasis: "#909090",
  highEmphasis: "#E0E0E0",
  heading: "#FFFFFF",
  main: "#D32F2F",
  hintCaution: "#FFAB40",
  hintSuccess: "#66BB6A",
  hintNeutral: "#757575",
  hintError: "#D32F2F",
};

const BACKGROUND = {
  light: "#1C1C1C",
  dark: "#0D0D0D",
  darkHot: "#222",
  scrimDark: "#111",
  scrimLight: "#FFFFFF60",
  hintCaution: "#FF6F0020",
  hintSuccess: "#00BFA520",
  hintNeutral: "#75757520",
  hintError: "#D5000020",
  primary: "#D32F2F20",
  secondary: "#FF6F0020",
};

const COMMON = {
  common: {
    black: "#000000",
    white: "#FFFFFF",
  },
  primary: PRIMARY,
  secondary: SECONDARY,
  tertiary: TERTIARY,
  error: ERROR,
  neutral: Neutral,
  grey: GREY,
};

export function palette() {
  const dark = {
    ...COMMON,
    mode: "dark",
    text: TEXT,
    background: BACKGROUND,
  };

  return dark;
}
