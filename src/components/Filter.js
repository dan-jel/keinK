import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

const Filter = ({ hoverState, name, color, type }) => {
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.theme);
  return (
    <ThemeProvider theme={theme}>
      <FilterContainer
        hoverState={hoverState}
        onClick={() => dispatch({ type: `${type}_CLICK` })}
        onMouseEnter={() => dispatch({ type: `${type}_HOVER` })}
        onMouseLeave={() => dispatch({ type: `${type}_LEAVE` })}
      >
        {hoverState === true && (
          <HoverDiv>
            <Circle color={color} hoverState={hoverState} />
            <FilterName hoverState={hoverState}>{name}</FilterName>
          </HoverDiv>
        )}
      </FilterContainer>
    </ThemeProvider>
  );
};

const FilterContainer = styled.div`
  margin-bottom: 1rem;
  z-index: 1000;
  margin-right: 1rem;
  display: flex;
  width: 200px;
  height: 3rem;
  display: flex;
  bottom: 0;
  right: 0;
  align-items: center;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
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
`;

export default Filter;
