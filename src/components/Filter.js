import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import ThemeData from "../Util";

const Filter = ({ hoverState, setHoverState, name, color, activeTheme }) => {
  return (
    <ThemeProvider theme={ThemeData[activeTheme]}>
      <FilterContainer
        hoverState={hoverState}
        onMouseEnter={() => setHoverState(true)}
        onMouseLeave={() => setHoverState(false)}
      >
        <Circle color={color} hoverState={hoverState} />
        <FilterName hoverState={hoverState}>{name}</FilterName>
      </FilterContainer>
    </ThemeProvider>
  );
};

const FilterContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;

const Circle = styled(motion.div)`
  height: 2rem;
  width: 2rem;
  display: flex;
  background: ${(props) => props.color};
  border-radius: 50%;
  margin-top: 0.2rem;
  margin-left: 1rem;
  visibility: ${(props) => (props.hoverState ? `visible` : `hidden`)};
`;

const FilterName = styled(motion.div)`
  margin: 0rem 1rem;
  height: 2rem;
  width: auto;
  font-size: 2rem;
  visibility: ${(props) => (props.hoverState ? `visible` : `hidden`)};
  color: ${({ theme }) => theme.color_text_1};
`;

export default Filter;
