import React, { useState, useEffect } from "react";
import axios from "axios";

const Data = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setdata([response.data]);
      console.log(response);
    });
  }, []);
  console.log(data);

  return (
    <div>
      {data.length ? (
        data[0].map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <h6>{item.body}</h6>
            </div>
          );
        })
      ) : (
        <h1>Loading ...</h1>
      )}
    </div>
  );
};

export default Data;
