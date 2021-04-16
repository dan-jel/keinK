import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// import { useSelector } from "react-redux";

import hand from "../img/icons/julo/hand.jpeg";
import eye from "../img/icons/julo/eye.jpeg";
import mouth from "../img/icons/julo/mouth.jpeg";
import ear from "../img/icons/julo/ear.jpeg";

const Filterbox = () => {
  // const filter = useSelector((store) => store.filter);

  return (
    <FilterBox>
      <img src={hand} alt="" />
      <img src={eye} alt="" />
      <img src={mouth} alt="" />
      <img src={ear} alt="" />
    </FilterBox>
  );
};

const FilterBox = styled(motion.div)`
  background: white;
  width: 550px;
  height: 150px;
  position: fixed;
  bottom: 7.5px;
  left: 50%;
  transform: translateX(-50%);
  box-sizing: border-box;
  border: 5px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  img {
    height: 100px;
    width: 100px;
  }
`;

export default Filterbox;
