import React, { useState } from "react";
import ComA from "./components/ComA";
import ComB from "./components/ComB";

const App = () => {
  const [name, setName] = useState("Mohammad");
  return (
    <div>
      <ComA name={name} />
    </div>
  );
};

export default App;
