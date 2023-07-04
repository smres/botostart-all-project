import React, { useCallback, useState } from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";

const App = () => {
  console.log("App rendered");
  const [valueA, setValueA] = useState("A");
  const [valueB, setValueB] = useState("B");

  const changeHandlerA = useCallback(() => [setValueA("AA")], [valueA]);
  const changeHandlerB = useCallback(() => [setValueB("BB")], [valueB]);

  return (
    <div>
      <ComponentA value={valueA} changeHandler={changeHandlerA} />
      <ComponentB value={valueB} changeHandler={changeHandlerB} />
    </div>
  );
};

export default App;
