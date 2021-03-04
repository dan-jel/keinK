import React from "react";
import styled from "styled-components";
import BackgroundImage from "../BackgroundImage";
import { useSelector } from "react-redux";

const Daniel = () => {
  const theme = useSelector((store) => store.theme);
  return (
    <Container theme={theme}>
      {theme.bg ? <BackgroundImage src={theme.background} alt="" /> : ""}
      <h1>Daniel</h1>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color_text};
`;

export default Daniel;
