import React, { useEffect, useState } from "react";
import axios from "axios";

const GetData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setIsLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        setIsLoading(false);
        setPost({});
        setError("An error occured");
      });
  }, []);

  return (
    <div>
      {isLoading ? "Loading" : post.body}
      {error && error}
    </div>
  );
};

export default GetData;
