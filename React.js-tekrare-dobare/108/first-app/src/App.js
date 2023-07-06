import React, { useState } from "react";

import ComA from "./components/ComA";

const App = () => {
  const [name, setName] = useState("Mamali");
  return (
    <div>
      <ComA name={name} />
    </div>
  );
};

export default App;
