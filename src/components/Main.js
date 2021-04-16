import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import Filterbox from "./Filterbox";
import { useSelector } from "react-redux";
import BackgroundImage from "./BackgroundImage";

const Main = () => {
  const theme = useSelector((store) => store.theme);

  return (
    <ThemeProvider theme={theme}>
      <Page>
        {theme.bg ? <BackgroundImage src={theme.background} alt="" /> : ""}
        <Filterbox />
      </Page>
    </ThemeProvider>
  );
};

const Page = styled(motion.div)`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  z-index: -1;
  justify-content: center;
  align-items: center;
  background: ${(theme) => theme.color_main};
  h1 {
    color: ${({ theme }) => theme.color_text};
    font-size: 3rem;
  }
`;

export default Main;
