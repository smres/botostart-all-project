import React, { useEffect, useRef } from "react";

const App = () => {
  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
    console.log(input);
  }, []);

  return (
    <div>
      <input type="text" ref={input} />
    </div>
  );
};

export default App;
