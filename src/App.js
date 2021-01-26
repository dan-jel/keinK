import Nav from "./components/Nav";
import Main from "./components/Main";
import React, { useState } from "react";

function App() {
  const [theme, setTheme] = useState(0);

  return (
    <div className="App">
      <Nav theme={theme} setTheme={setTheme} />
      <Main />
    </div>
  );
}

export default App;
