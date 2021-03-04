import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import BackgroundImage from "./BackgroundImage";

const Guests = () => {
  const theme = useSelector((store) => store.theme);
  return (
    <ThemeProvider theme={theme}>
      <Page>
        {theme.bg ? <BackgroundImage src={theme.background} alt="" /> : ""}
        <h1>GUESTS!</h1>
      </Page>
    </ThemeProvider>
  );
};

const Page = styled.div`
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.color_main};
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  z-index: -1;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color_text};
  h1 {
    color: ${({ theme }) => theme.color_text};
    font-size: 3rem;
  }
`;

export default Guests;
