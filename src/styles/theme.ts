const colors = {
  primary: {
    base: "#222",
    active: "#204fdc",
    hover: "#f5f5f5",
    focus: "skyblue",
    disabled: "#aaa",
    error: "red",
    warning: "orange",
    success: "lightgreen",
    info: "blue",
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
};
export const lightTheme = { ...defaultTheme };
