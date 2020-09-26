import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family:'Sunflower';
    src: url(${require("../fonts/Sunflower-Bold.ttf")});
  }
  @font-face {
    font-family:'Gaegu';
    src: url(${require("../fonts/Gaegu-Bold.ttf")});
  }
  
  * {
    font-family: "Gaegu", sans-serif;
    color: #fff;
    box-sizing: border-box;
  }
  
  body {
    background: #50527a;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

`;