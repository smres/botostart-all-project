import React, { useState } from "react";
import Login from "./components/Login";
import Landing from "./components/Landing";

const App = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>
        Toggle is {`${toggle}`}
      </button>
      {toggle ? <Landing /> : <Login />}
    </div>
  );
};

export default App;
