import React from "react";

import Filters from "./components/Filters";
import Tickets from "./components/Tickets";
import Header from "./components/Header";
import { MainWrapper } from "./theme/globalStyle";

function App() {
  return (
    <MainWrapper>
      <Header/>
      <Filters/>
      <Tickets/>
    </MainWrapper>
  );
}

export default App;
