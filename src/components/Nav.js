import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DropDown from "./DropDown";

const Nav = () => {
  const [artistHover, setArtistHover] = useState(false);
  const [artistClick, setArtistClick] = useState(false);

  const theme = useSelector((store) => store.theme);
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={theme}>
      <StyledNav>
        <Theme>
          <li>
            <Circle
              title="default"
              className="circle0"
              onClick={() => {
                dispatch({ type: "SET_0" });
              }}
            ></Circle>
          </li>
          <li>
            <Circle
              title="chiara"
              className="circle1"
              onClick={() => {
                dispatch({ type: "SET_1" });
              }}
            ></Circle>
          </li>
          <li>
            <Circle
              title="daniel"
              className="circle2"
              onClick={() => {
                dispatch({ type: "SET_2" });
              }}
            ></Circle>
          </li>
          <li>
            <Circle
              title="julius"
              className="circle3"
              onClick={() => {
                dispatch({ type: "SET_3" });
              }}
            ></Circle>
          </li>
          <li>
            <Circle
              title="leo"
              className="circle4"
              onClick={() => {
                dispatch({ type: "SET_4" });
              }}
            ></Circle>
          </li>
          <li>
            <Circle
              title="vincent"
              className="circle5"
              onClick={() => {
                dispatch({ type: "SET_5" });
              }}
            ></Circle>
          </li>
        </Theme>
        <Logo>
          <Link to="/">taxi taxi</Link>
        </Logo>
        <Links>
          <ArtistDiv
            onMouseEnter={() => setArtistHover(true)}
            onMouseLeave={() => setArtistHover(false)}
          >
            <li onClick={() => setArtistClick(!artistClick)}>artists</li>
            {artistClick || artistHover ? <DropDown /> : ""}
          </ArtistDiv>

          <li>
            <Link to="/imprint">imprint</Link>
          </li>
        </Links>
      </StyledNav>
    </ThemeProvider>
  );
};

const ArtistDiv = styled.div`
  margin: 0 50px 0 0;
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  text-align: center;
  li {
    cursor: pointer;
    z-index: 100;
    :hover {
      color: ${({ theme }) => theme.color_hightlight};
    }
  }
`;

const StyledNav = styled.div`
  position: fixed;
  color: ${({ theme }) => theme.color_text_1};
  background: ${({ theme }) => theme.color_nav};
  height: 100px;
  width: 100%;
  margin: 0;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 50;
  // box-shadow: 0px 7px 10px black;
`;

const Theme = styled.ul`
  list-style: none;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  li {
    padding-left: 3.5rem;
  }
  .circle0 {
    background: #663399;
    border-radius: ${({ theme }) => theme.id === 0 && "0"};
  }
  .circle1 {
    background: #6a5acd;
    border-radius: ${({ theme }) => theme.id === 1 && "0"};
  }
  .circle2 {
    background: #9370db;
    border-radius: ${({ theme }) => theme.id === 2 && "0"};
  }
  .circle3 {
    background: #9932cc;
    border-radius: ${({ theme }) => theme.id === 3 && "0"};
  }
  .circle4 {
    background: #ee82ee;
    border-radius: ${({ theme }) => theme.id === 4 && "0"};
  }
  .circle5 {
    background: #dda0dd;
    border-radius: ${({ theme }) => theme.id === 5 && "0"};
  }
`;

const Links = styled.ul`
  list-style: none;
  display: flex;
  position: absolute;
  top: 50px;
  transform: translateY(-50%);
  right: 50px;
  margin: 0;
  li {
    font-size: 1.5rem;
    a {
      color: ${({ theme }) => theme.color_text_1};
      text-decoration: none;
    }
    a:hover {
      color: ${({ theme }) => theme.color_hightlight};
    }
  }
`;

const Logo = styled.h1`
  font-size: 2.5rem;
  position: absolute;
  top: 0;
  left: 50%;
  margin: 0;
  transform: translate(-50%, -50%);
  margin-top: 5vh;
  color: ${({ theme }) => theme.color_text};
  a:hover {
    color: ${({ theme }) => theme.color_hightlight};
  }
  a:link {
    text-decoration: none;
  }
  a {
    font-family: "Dosis", sans-serif;
    color: ${({ theme }) => theme.color_text_1};
  }
`;

const Circle = styled.div`
  cursor: pointer;
  position: absolute;
  top: 5vh;
  transform: translate(-40px, -50%);
  margin: 0;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  // box-shadow: 2px 2px 5px 2px black;
  &:hover {
    margin: 0;
    height: 35px;
    width: 35px;
    top: 5vh;
    position: absolute;
    transform: translate(-45px, -50%);
  }
`;

export default withRouter(Nav);
