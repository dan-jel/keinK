import React from "react";
import styled from "styled-components";

const Artist = () => {
  return (
    <Page>
      <h1>ARTIST!</h1>
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

export default Artist;
