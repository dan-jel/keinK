import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import ThemeData from "../Util";
import Filterbox from "./Filterbox";

const Main = ({ activeTheme }) => {
  return (
    <ThemeProvider theme={ThemeData[activeTheme]}>
      <Page
        initial={{ opacity: 0, y: "-100%", transition: { ease: "easeOut" } }}
        animate={{ opacity: 1, y: "0", transition: { ease: "easeOut" } }}
        exit={{ y: "100%", opacity: 0, transition: { ease: "easeOut" } }}
      >
        <Filterbox activeTheme={activeTheme} />
        <h1>MAIN!</h1>
      </Page>
    </ThemeProvider>
  );
};

const Page = styled(motion.div)`
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
  color: ${({ theme }) => theme.color_text_1};
  h1 {
    color: ${({ theme }) => theme.color_text};
    font-size: 3rem;
  }
`;

export default Main;
