import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
  });

  React.useEffect(() => {
    console.log("name = ", data.name);
  }, [data]);

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data.name);
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={changeHandler}
      />
      <input type="text" name="age" value={data.age} onChange={changeHandler} />
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default Form;
