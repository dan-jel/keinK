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
            <Link className="fixed-nav" to="/imprint">
              imprint
            </Link>
          </li>
          <li>
            <Link className="fixed-nav" to="/guests">
              guests
            </Link>
          </li>
        </Links>
      </StyledNav>
    </ThemeProvider>
  );
};

const ArtistDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  text-align: center;
  z-index: 100;
  li {
    cursor: pointer;
    z-index: 100;
    color: ${({ theme }) => theme.color_header};
  }
`;

const StyledNav = styled.div`
  position: fixed;
  color: ${({ theme }) => theme.color_text_1};
  background: ${({ theme }) => theme.color_nav};
  height: 75px;
  width: 100%;
  justify-content: center;
  margin: 0;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 100;
  // box-shadow: 0px 7px 10px black;
`;

const Theme = styled.ul`
  height: 100%;
  width: auto;
  align-items: center;
  list-style: none;
  display: flex;
  position: relative;
  margin: 0;
  padding-left: 1rem;
  li {
    padding: 0 1rem;
  }
  .circle0 {
    background: ${({ theme }) => (theme.id === 0 ? theme.color_circle : "")};
  }
  .circle1 {
    background: ${({ theme }) => (theme.id === 1 ? theme.color_circle : "")};
  }
  .circle2 {
    background: ${({ theme }) => (theme.id === 2 ? theme.color_circle : "")};
  }
  .circle3 {
    background: ${({ theme }) => (theme.id === 3 ? theme.color_circle : "")};
  }
  .circle4 {
    background: ${({ theme }) => (theme.id === 4 ? theme.color_circle : "")};
  }
  .circle5 {
    background: ${({ theme }) => (theme.id === 5 ? theme.color_circle : "")};
  }
`;

const Links = styled.ul`
  list-style: none;
  display: flex;
  position: absolute;
  right: 50px;
  margin: 0;
  li {
    font-size: 1.5rem;
    margin-left: 3rem;
    .fixed-nav {
      :hover {
        color: ${({ theme }) => theme.color_hover};
      }
    }
    a {
      color: ${({ theme }) => theme.color_header};
      text-decoration: none;
    }
  }
`;

const Logo = styled.h1`
  font-size: 2.5rem;
  position: absolute;
  left: 50%;
  margin: 0;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.color_text};
  a:hover {
    color: ${({ theme }) => theme.color_hightlight};
  }
  a:link {
    text-decoration: none;
  }
  a {
    font-family: "Dosis", sans-serif;
    color: ${({ theme }) => theme.color_header};
    :hover {
      color: ${({ theme }) => theme.color_hover};
    }
  }
`;

const Circle = styled.div`
  cursor: pointer;
  position: relative;
  margin: 0;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: 2px solid white;
  // box-shadow: 2px 2px 5px 2px black;
`;

export default withRouter(Nav);
