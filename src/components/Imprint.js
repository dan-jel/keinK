import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Imprint = () => {
  const theme = useSelector((store) => store.theme);
  return (
    <ThemeProvider theme={theme}>
      <Page>
        <h1>IMPRINT!</h1>
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

export default Imprint;
