import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import ThemeData from "../Util";
import { useDispatch } from "react-redux";

const Filter = ({ hoverState, name, color, activeTheme, type }) => {
  const dispatch = useDispatch();
  return (
    <ThemeProvider theme={ThemeData[activeTheme]}>
      <FilterContainer
        hoverState={hoverState}
        onClick={() => dispatch({ type: `${type}_CLICK` })}
        onMouseEnter={() => dispatch({ type: `${type}_HOVER` })}
        onMouseLeave={() => dispatch({ type: `${type}_LEAVE` })}
      >
        <HoverDiv hoverState={hoverState}>
          <Circle color={color} hoverState={hoverState} />
          <FilterName hoverState={hoverState}>{name}</FilterName>
        </HoverDiv>
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
`;

const FilterName = styled(motion.div)`
  margin: 0rem 1rem;
  height: 2rem;
  width: auto;
  font-size: 2rem;

  color: ${({ theme }) => theme.color_text_1};
`;

const HoverDiv = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  visibility: ${(props) => (props.hoverState ? `visible` : `hidden`)};
`;

export default Filter;
