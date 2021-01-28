import React, { useState } from "react";
import Filter from "./Filter";
import styled from "styled-components";
import { motion } from "framer-motion";

const Main = () => {
  const [hoverState, setHoverState] = useState(false);
  return (
    <Page
      initial={{ opacity: 0, y: "-100%", transition: { ease: "easeOut" } }}
      animate={{ opacity: 1, y: "0", transition: { ease: "easeOut" } }}
      exit={{ y: "100%", opacity: 0, transition: { ease: "easeOut" } }}
    >
      <Filter hoverState={hoverState} setHoverState={setHoverState} />
      <h1>MAIN!</h1>
    </Page>
  );
};

const Page = styled(motion.div)`
  top: 0;
  left: 0;
  background: #1f1f1f;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  z-index: -1;
  justify-content: center;
  align-items: center;
  h1 {
    color: white;
    font-size: 3rem;
  }
`;

export default Main;
