import React from "react";
import styled from "styled-components";

const Nav = ({ theme, setTheme }) => {
  return (
    <StyledNav>
      <Theme>
        <li>
          <Circle
            className="circle0"
            onClick={() => {
              setTheme(0);
            }}
          ></Circle>
        </li>
        <li>
          <Circle
            className="circle1"
            onClick={() => {
              setTheme(1);
            }}
          ></Circle>
        </li>
        <li>
          <Circle
            className="circle2"
            onClick={() => {
              setTheme(2);
            }}
          ></Circle>
        </li>
        <li>
          <Circle
            className="circle3"
            onClick={() => {
              setTheme(3);
            }}
          ></Circle>
        </li>
        <li>
          <Circle
            className="circle4"
            onClick={() => {
              setTheme(4);
            }}
          ></Circle>
        </li>
        <li>
          <Circle
            className="circle5"
            onClick={() => {
              setTheme(5);
            }}
          ></Circle>
        </li>
      </Theme>
      <Logo
        onClick={() => {
          console.log(theme);
        }}
      >
        keinK
      </Logo>
      <Links>
        <li>artist</li>
        <li>imprint</li>
      </Links>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  position: absolute;
  color: white;
  background: #141414;
  height: 10vh;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 7px 10px black;
`;

const Theme = styled.ul`
  list-style: none;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  li {
    padding-left: 3.5rem;
  }
  .circle0 {
    background: #663399;
  }
  .circle1 {
    background: #6a5acd;
  }
  .circle2 {
    background: #9370db;
  }
  .circle3 {
    background: #9932cc;
  }
  .circle4 {
    background: #ee82ee;
  }
  .circle5 {
    background: #dda0dd;
  }
`;

const Links = styled.ul`
  list-style: none;
  display: flex;
  position: absolute;
  top: 5vh;
  right: 0;
  margin: 0;
  transform: translateY(-50%);
  li {
    padding-right: 4rem;
    font-size: 1.5rem;
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  position: absolute;
  top: 0;
  left: 50%;
  margin: 0;
  transform: translate(-50%, -50%);
  margin-top: 5vh;
`;

const Circle = styled.div`
  position: absolute;
  top: 5vh;
  transform: translateY(-50%);
  margin: 0;
  background: green;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  box-shadow: 2px 2px 5px 2px black;
  &:hover {
    margin: 0;
    height: 35px;
    width: 35px;
    top: 5vh;
    position: absolute;
    transform: translate(-5px, -50%);
  }
`;

export default Nav;
