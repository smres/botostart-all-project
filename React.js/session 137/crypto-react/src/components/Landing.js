import React, { useState, useEffect } from "react";

// API
import { getCoin } from "../services/api";

// Components
import Loader from "./Loader";

const Landing = () => {
  const [coins, setCoin] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      console.log(data);
      setCoin(data);
    };

    fetchAPI();
  }, []);

  return (
    <>
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        type="text"
        placeholder="Search"
      />

      {!coins.length ? (
        <Loader />
      ) : (
        <div>
          {coins.map((coin) => (
            <p key={coin.id}>{coin.name}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default Landing;
