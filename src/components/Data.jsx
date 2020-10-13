import React from "react";

function Data(props) {
  return (
    <div className="container">
      <div className="coin">
        <img src={props.image} alt="coin" />
        <h1>{props.name}</h1>
        <p className="symbol">{props.symbol}</p>
      </div>
      <div className="text-box">
        <p>R{props.price}</p>
        <p>R{props.volume.toLocaleString()}</p>
        {props.priceChange < 0 ? (
          <p style={{ color: "red" }}>{props.priceChange.toFixed(2)}%</p>
        ) : (
          <p style={{ color: "green" }}>{props.priceChange.toFixed(2)}%</p>
        )}
      </div>
    </div>
  );
}

export default Data;
