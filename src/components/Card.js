import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

function Rando(Min, Max) {
  const min = Min;
  const max = Max;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Card = ({ dragConstraints, project }) => {
  const transition = {
    min: 0,
    max: 30,
    power: 0.25,
  };
  const x = Rando(0, 80);
  const y = Rando(0, 80);
  console.log(x, y);

  return (
    <Canvas
      drag
      dragConstraints={dragConstraints}
      dragTransition={transition}
      xCord={x}
      yCord={y}
    ></Canvas>
  );
};

const Canvas = styled(motion.div)`
  background: red;
  position: absolute;
  height: 200px;
  width: 200px;
  top: ${(props) => props.yCord}%;
  left: ${(props) => props.xCord}%;
`;

export default Card;
