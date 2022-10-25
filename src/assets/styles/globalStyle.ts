import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import NotoRegular from "../fonts/noto-sans-kr-regular.woff";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  @font-face {
    font-family: "noto";
    src: local("NotoSansKrRegular"), url(${NotoRegular}) format('woff');
  }
  html,
  body {
    font-family: "noto";
    height: 100%;
    width: 100%;
    font-size: 100%;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
