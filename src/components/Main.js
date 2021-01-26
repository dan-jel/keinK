import React, { useState } from "react";
import Filter from "./Filter";
import styled from "styled-components";

const Main = () => {
  const [hoverState, setHoverState] = useState(false);
  return (
    <Page>
      <Filter hoverState={hoverState} setHoverState={setHoverState} />
      <h1>MAIN!</h1>
    </Page>
  );
};

const Page = styled.div`
  top: 0;
  left: 0;
  background: #1f1f1f;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  z-index: -1;
  justify-content: center;
  align-items: center;
  h1 {
    color: white;
    font-size: 3rem;
  }
`;

export default Main;
