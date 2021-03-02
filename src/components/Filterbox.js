import Filter from "./Filter";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Filterbox = ({ activeTheme }) => {
  const filter = useSelector((store) => store.filter);

  return (
    <FilterBox>
      <Filter
        hoverState={filter.visuell.show}
        name="VISUELL"
        type="VISUELL"
        color="red"
      />
      <Filter
        hoverState={filter.akustisch.show}
        name="AKUSTISCH"
        type="AKUSTISCH"
        color="blue"
      />
      <Filter
        hoverState={filter.haptisch.show}
        name="HAPTISCH"
        type="HAPTISCH"
        color="green"
      />
      <Filter
        hoverState={filter.verbal.show}
        name="VERBAL"
        type="VERBAL"
        color="yellow"
      />
    </FilterBox>
  );
};

const FilterBox = styled(motion.div)`
  padding-bottom: 1rem;
  padding-right: 1rem;
  display: flex;
  position: fixed;
  height: auto;
  width: auto;
  bottom: 0;
  right: 0;
  flex-direction: column;
  align-items: center;
`;

export default Filterbox;
