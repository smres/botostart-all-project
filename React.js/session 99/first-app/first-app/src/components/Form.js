import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({ name: "", age: "" });

  const changeNameHandler = (event) => {
    setData({ ...data, name: event.target.value });
  };

  return (
    <div>
      <input type="text" value={data.name} onChange={changeNameHandler} />
      <input
        type="text"
        value={data.age}
        onChange={(event) => setData({ ...data, age: event.target.value })}
      />
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default Form;
