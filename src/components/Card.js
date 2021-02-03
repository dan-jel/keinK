import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

function Rando(Min, Max) {
  const min = Min;
  const max = Max;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Card = ({ dragConstraints, project, img }) => {
  const transition = {
    min: 0,
    max: 30,
    power: 0.25,
  };
  const x = Rando(0, 80);
  const y = Rando(0, 80);

  return (
    <Canvas
      drag
      dragConstraints={dragConstraints}
      dragTransition={transition}
      xCord={x}
      yCord={y}
      project={project}
    >
      <CardImg project={project}>
        <img src={img} alt={project.name} />
      </CardImg>
      <CardText></CardText>
    </Canvas>
  );
};

const Canvas = styled(motion.div)`
  background: ${(props) => props.project.color};
  height: auto;
  width: auto;
  grid-column: ${(props) => props.project.pos[0]};
  grid-row: ${(props) => props.project.pos[1]};
`;

const CardImg = styled.div`
  position: relative;
  width: ${(props) => props.project.split[0]}%;
  height: ${(props) => props.project.split[1]}%;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: ${(props) => props.project.img_width};
    height: ${(props) => props.project.img_height};
  }
`;

const CardText = styled.div``;

export default Card;
