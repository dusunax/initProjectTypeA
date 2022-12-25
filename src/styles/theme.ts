export interface Colors {
  primary: {
    base: string;
    active: string;
    hover: string;
    focus: string;
    disabled: string;
    error: string;
    warning: string;
    success: string;
    info: string;
    light: string;
    dark: string;
  };
}
const colors: Colors = {
  primary: {
    base: "#444",
    active: "#204fdc",
    hover: "#f5f5f5",
    focus: "skyblue",
    disabled: "#aaa",
    error: "red",
    warning: "orange",
    success: "lightgreen",
    info: "blue",
    light: "#aaa",
    dark: "#222",
  },
};
export interface FontSizes {
  xs: string;
  sm: string;
  md: string;
  normal: string;
  lg: string;
  xl: string;
  xxl: string;
}
const fontSizes: FontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  normal: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  xxl: "1.5rem",
};
export interface FontWeights {
  hairline: number;
  thin: number;
  light: number;
  normal: number;
  medium: number;
  semibold: number;
  bold: number;
  extrabold: number;
  black: number;
  unweighted: number;
}
const fontWeights: FontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
  unweighted: 900,
};

export interface typography {}
const typography = {
  body: {
    fontFamily: "inherit",
    lineHeight: 1.6,
    fontSize: fontSizes.normal,
    fontWeight: fontWeights.normal,
    color: colors.primary.base,
  },
  title: {
    fontFamily: "inherit",
    lineHeight: "inherit",
    fontSize: fontSizes.xxl,
    fontWeight: fontWeights.bold,
    color: colors.primary.base,
  },
  input: {
    fontFamily: "inherit",
    lineHeight: "inherit",
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.normal,
    color: colors.primary.base,
  },
  label: {
    fontFamily: "inherit",
    lineHeight: "inherit",
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.normal,
    color: colors.primary.base,
  },
  error: {
    fontFamily: "inherit",
    lineHeight: "inherit",
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.normal,
    color: colors.primary.error,
  },
};

export interface BreakPoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}
const breakpoints: BreakPoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const defaultTheme = {
  colors,
  breakpoints,
  fontSizes,
  fontWeights,
  typography,
};
export const lightTheme = { ...defaultTheme };
