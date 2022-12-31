import React, { useState, useEffect } from "react";

// API
import { getCoin } from "../services/api";

// Components
import Loader from "./Loader";
import Coin from "./Coin";

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

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  console.log(searchCoins);
  return (
    <>
      <input
        value={search}
        onChange={searchHandler}
        type="text"
        placeholder="Search"
      />

      {!coins.length ? (
        <Loader />
      ) : (
        <div>
          {searchCoins.map((coin) => (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
              marketCap={coin.market_cap}
              priceChange={coin.price_change_percentage_24h}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Landing;
