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
        activeTheme={activeTheme}
        hoverState={filter.photo.show}
        name="PHOTO"
        type="PHOTO"
        color="red"
      />
      <Filter
        activeTheme={activeTheme}
        hoverState={filter.video.show}
        name="VIDEO"
        type="VIDEO"
        color="blue"
      />
      <Filter
        activeTheme={activeTheme}
        hoverState={filter.writing.show}
        name="WRITING"
        type="WRITING"
        color="yellow"
      />
      <Filter
        activeTheme={activeTheme}
        hoverState={filter.threeD.show}
        name="3D"
        type="THREED"
        color="green"
      />
      <Filter
        activeTheme={activeTheme}
        hoverState={filter.music.show}
        name="MUSIC"
        type="MUSIC"
        color="orange"
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
