import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import Sebang from "../fonts/SEBANG-Gothic-OTF.otf";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  @font-face {
    font-family: "sebang";
    src: local("Sebang"), url(${Sebang});
  }
  html,
  body,
  #root {
    font-family: "sebang";
    height: 100%;
    width: 100%;
    font-size: 100%;
    box-sizing: border-box;
    ul, li {
      list-style: none;
      margin: 0 auto;
      padding: 0;
    }
  }
`;

export default GlobalStyle;
