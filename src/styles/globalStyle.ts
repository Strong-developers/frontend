import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html,
  body {
    font-family: "Noto Sans KR",  sans-serif;; 
    height: 100%;
    width: 100%;
    font-size: 62.5%;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
