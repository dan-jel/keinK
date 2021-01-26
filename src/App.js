import Nav from "./components/Nav";
import Main from "./components/Main";
import Artist from "./components/Artist";
import Imprint from "./components/Imprint";
import React, { useState } from "react";
import { Switch, Route, Router } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState(0);

  return (
    <div className="App">
      <Nav theme={theme} setTheme={setTheme} />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/imprint" exact>
          <Imprint />
        </Route>
        <Route path="/artist" exact>
          <Artist />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
