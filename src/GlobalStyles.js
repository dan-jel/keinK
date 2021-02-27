import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "LeosFont";
        src: local("LeosFont"), url(./fonts/LeosFont.ttf) format("truetype");
    }
  body {
    font-family: LeosFont;
    color: ${(props) => (props.whiteColor ? "white" : "black")};
  }
`;

export default GlobalStyle;
