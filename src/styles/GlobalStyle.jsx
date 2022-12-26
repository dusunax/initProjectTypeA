import { createGlobalStyle, css } from "styled-components";
import reset from "./customReset.css?inline";
import boilerStyle from "./boilerStyle.css?inline";
import fontFaces from "./fontFaces.css?inline";

const GlobalStyle = createGlobalStyle`
  ${reset};
  ${boilerStyle}
  ${fontFaces}
  
  ${({ theme }) => {
    console.log(theme);

    return css`
      body {
        font-family: "Roboto", "Gothic A1";

        /* 1rem == 10px로 만드는 비율 */
        /* font-size: 62.5%; */
      }
    `;
  }}
`;

export default GlobalStyle;
