import React from "react";
import styled from "styled-components";

const Filter = ({ hoverState, setHoverState }) => {
  return (
    <FilterBox
      hoverState={hoverState}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    ></FilterBox>
  );
};

const FilterBox = styled.div`
  background: ${(prop) => (prop.hoverState ? `red` : `transparent`)};
  position: fixed;
  display: flex;
  height: 40vh;
  width: 300px;
  z-index: 100;
  right: 0;
  bottom: 0;
`;

export default Filter;
