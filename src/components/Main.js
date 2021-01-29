import React, { useState } from "react";
import Filter from "./Filter";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import ThemeData from "../Util";

const Main = ({ activeTheme }) => {
  const [hoverState1, setHoverState1] = useState(false);
  const [hoverState2, setHoverState2] = useState(false);
  const [hoverState3, setHoverState3] = useState(false);
  const [hoverState4, setHoverState4] = useState(false);
  const [hoverState5, setHoverState5] = useState(false);

  return (
    <ThemeProvider theme={ThemeData[activeTheme]}>
      <Page
        initial={{ opacity: 0, y: "-100%", transition: { ease: "easeOut" } }}
        animate={{ opacity: 1, y: "0", transition: { ease: "easeOut" } }}
        exit={{ y: "100%", opacity: 0, transition: { ease: "easeOut" } }}
      >
        <FilterBox>
          <Filter
            activeTheme={activeTheme}
            hoverState={hoverState1}
            setHoverState={setHoverState1}
            name="PHOTO"
            color="red"
          />
          <Filter
            activeTheme={activeTheme}
            hoverState={hoverState2}
            setHoverState={setHoverState2}
            name="VIDEO"
            color="blue"
          />
          <Filter
            activeTheme={activeTheme}
            hoverState={hoverState3}
            setHoverState={setHoverState3}
            name="WRITING"
            color="yellow"
          />
          <Filter
            activeTheme={activeTheme}
            hoverState={hoverState4}
            setHoverState={setHoverState4}
            name="3D"
            color="green"
          />
          <Filter
            activeTheme={activeTheme}
            hoverState={hoverState5}
            setHoverState={setHoverState5}
            name="MUSIC"
            color="orange"
          />
        </FilterBox>

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

const FilterBox = styled(motion.div)`
  padding-top: 1rem;
  display: flex;
  position: fixed;
  height: auto;
  width: auto;
  bottom: 0;
  right: 0;
  flex-direction: column;
  align-items: center;
`;

export default Main;
