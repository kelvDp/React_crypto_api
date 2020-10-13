import React, { useState, useEffect } from "react";
import Data from "./Data";
import axios from "axios";

function App() {
  const [currency, setCurrency] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=zar&order=market_cap_desc&per_page=50&page=1&sparkline=false";

    axios
      .get(url)
      .then((res) => setCurrency(res.data))
      .catch((err) => console.log(err));
  });

  const filteredCurrency = currency.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="main">
      <div className="search-box">
        <h1>Find your crypto currency</h1>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
      </div>
      {filteredCurrency.map((coin) => (
        <Data
          key={coin.id}
          image={coin.image}
          name={coin.name}
          symbol={coin.symbol}
          price={coin.current_price}
          volume={coin.total_volume}
          priceChange={coin.price_change_percentage_24h}
        />
      ))}
    </div>
  );
}

export default App;
