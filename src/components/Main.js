import React from "react";
import styled from "styled-components";

const Main = () => {
  return <Page></Page>;
};

const Page = styled.div`
  top: 0;
  left: 0;
  background: #1f1f1f;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -5;
`;

export default Main;
