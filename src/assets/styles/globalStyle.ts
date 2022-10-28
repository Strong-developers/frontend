import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import MaruBuriRegular from "../fonts/MaruBuri-Regular.otf";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  @font-face {
    font-family: "maru";
    src: local("MaruBuri-Regular"), url(${MaruBuriRegular});
  }
  html,
  body {
    font-family: "maru";
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
