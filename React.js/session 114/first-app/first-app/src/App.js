import React, { useRef, useEffect } from "react";

const App = () => {
  const input = useRef(null);

  useEffect(() => {
    console.log(input);
    input.current.focus();
  }, []);

  return (
    <div>
      <input ref={input} type="text" />
    </div>
  );
};

export default App;
