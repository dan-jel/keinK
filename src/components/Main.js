import React, { useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import Filterbox from "./Filterbox";
import { useSelector } from "react-redux";
import Card from "./Card";
import Projects from "../Projects";

const Main = ({ activeTheme }) => {
  const theme = useSelector((store) => store.theme);
  const contraintsRef = useRef(null);
  return (
    <ThemeProvider theme={theme.selected.theme}>
      <Page
        initial={{ opacity: 0, y: "-100%", transition: { ease: "easeOut" } }}
        animate={{ opacity: 1, y: "0", transition: { ease: "easeOut" } }}
        exit={{ y: "100%", opacity: 0, transition: { ease: "easeOut" } }}
      >
        <Filterbox activeTheme={activeTheme} />
        <Cardbox ref={contraintsRef}>
          {Projects.map((project) => (
            <Card
              project={project}
              dragConstraints={contraintsRef}
              key={project.id}
            />
          ))}
        </Cardbox>
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

const Cardbox = styled(motion.div)`
  display: flex;
  position: relative;
  background: #363636;
  top: 0;
  left: 0;
  width: 70vw;
  height: 75vh;
  transform: translateY(5vh);
  z-index: -10;
  border-radius: 5%;
`;

export default Main;
