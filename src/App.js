import Nav from "./components/Nav";
import Main from "./components/Main";
import Imprint from "./components/Imprint";
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import GlobalStyle from "./GlobalStyles";

// Artist Pages:
import Daniel from "./components/artists/Daniel";
import Chiara from "./components/artists/Chiara";
import Julius from "./components/artists/Julius";
import Vincent from "./components/artists/Vincent";
import Leonie from "./components/artists/Leonie";

function App() {
  const theme = useSelector((store) => store.theme);
  const [activeTheme, setActiveTheme] = useState(0);

  return (
    <StyledApp className="App" theme={theme}>
      <GlobalStyle />
      <Nav activeTheme={activeTheme} setActiveTheme={setActiveTheme} />
      <AnimatePresence>
        <Switch>
          <Route exact path="/Imprint" component={Imprint} />
          <Route exact path="/Chiara" component={Chiara} />
          <Route exact path="/Daniel" component={Daniel} />
          <Route exact path="/Julius" component={Julius} />
          <Route exact path="/Leonie" component={Leonie} />
          <Route exact path="/Vincent" component={Vincent} />
          <Route exact path="/" component={Main} />
        </Switch>
      </AnimatePresence>
    </StyledApp>
  );
}

const StyledApp = styled(motion.div)`
  z-index: -10;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color_main};
`;

export default App;
