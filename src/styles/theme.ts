import { styleGuide } from "./design/styleGuide";
import { layoutStyle } from "./theme/layoutStyle";
import { fontStyle } from "./theme/fontStyle";

export const defaultTheme = {
  styleGuide,
  layoutStyle,
  fontStyle,
};
export const lightTheme = { ...defaultTheme };
