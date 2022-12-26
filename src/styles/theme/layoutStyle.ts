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

export interface Paddings {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}
const paddings: Paddings = {
  sm: "0 1rem",
  md: "0 1.5rem",
  lg: "0 1.5rem",
  xl: "0 2rem",
};

export const layoutStyle = {
  breakpoints,
  paddings,
};
