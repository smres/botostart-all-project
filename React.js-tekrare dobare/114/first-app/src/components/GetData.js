import React from "react";
import { DispatchData } from "./NewGetData";

const GetData = () => {
  const dispatch = React.useContext(DispatchData);
  return (
    <div>
      {console.log(dispatch)}
      {dispatch.isLoading ? "Loading ..." : dispatch.post.body}
      {dispatch.error && dispatch.error}
    </div>
  );
};

export default GetData;
