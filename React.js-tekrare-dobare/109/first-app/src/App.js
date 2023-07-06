import React, { useState, createContext } from "react";

import ComA from "./components/ComA";

export const NameContext = createContext();
export const AgeContext = createContext();

const App = () => {
  const [name, setName] = useState("Mamali");
  return (
    <div>
      <NameContext.Provider value={name}>
        <AgeContext.Provider value={23}>
          <ComA />
        </AgeContext.Provider>
      </NameContext.Provider>
    </div>
  );
};

export default App;
