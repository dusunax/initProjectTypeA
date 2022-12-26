import { themeColors } from "../design/colors";
const { colors } = themeColors;

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

export interface Typography {
  [key: string]: {
    fontFamily: string;
    lineHeight: string;
    fontSize: string;
    fontWeight: number;
    color: string;
  };
}
const typography: Typography = {
  body: {
    fontFamily: "inherit",
    lineHeight: "1.6",
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
    color: colors.system.color05,
  },
};

export const fontStyle = {
  fontSizes,
  fontWeights,
  typography,
};
