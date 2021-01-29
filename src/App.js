import Nav from "./components/Nav";
import Main from "./components/Main";
import Artist from "./components/Artist";
import Imprint from "./components/Imprint";
import React, { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { motion } from "framer-motion";
import ThemeData from "./Util";

function App() {
  const location = useLocation();
  const [activeTheme, setActiveTheme] = useState(0);

  return (
    <StyledApp className="App" theme={ThemeData[activeTheme]}>
      <AnimatePresence>
        <Nav activeTheme={activeTheme} setActiveTheme={setActiveTheme} />
        <Switch location={location} key={location.key}>
          <Route path="/" exact>
            <Main activeTheme={activeTheme} />
          </Route>
          <Route path="/imprint" exact>
            <Imprint activeTheme={activeTheme} />
          </Route>
          <Route path="/artist" exact>
            <Artist activeTheme={activeTheme} />
          </Route>
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
  background: ${({ theme }) => theme.main_color};
`;

export default App;
