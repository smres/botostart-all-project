import React, { useReducer, useEffect } from "react";
import axios from "axios";
import GetData from "./GetData";

export const DispatchData = React.createContext();

const initialState = {
  isLoading: true,
  post: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        isLoading: false,
        post: action.payload,
        error: "",
      };
    case "FAILED":
      return {
        isLoading: false,
        post: {},
        error: "An error occured",
      };
    default:
      return state;
  }
};

const NewGetData = () => {
  const [data, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FAILED" });
      });
  }, []);

  return (
    <div>
      <DispatchData.Provider value={data}>
        <GetData />
      </DispatchData.Provider>
    </div>
  );
};

export default NewGetData;
