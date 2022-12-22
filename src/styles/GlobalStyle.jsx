import { createGlobalStyle, css } from "styled-components";
import reset from "./customReset.css";

const GlobalStyle = createGlobalStyle`
  ${reset};

  ${({ theme }) => {
    return css`
      body {
        /* 1rem == 10px로 만드는 비율 */
        /* font-size: 62.5%; */
        color: ${theme.colors.primary.base};
      }
    `;
  }}
`;

export default GlobalStyle;
