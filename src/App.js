import React from "react";

import Filters from "./components/Filters";
import Tickets from "./components/Tickets";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Filters/>
        <Tickets/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
