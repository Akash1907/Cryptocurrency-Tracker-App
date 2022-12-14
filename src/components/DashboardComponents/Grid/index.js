import React from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Link } from 'react-router-dom'

//todo: responsive + graphs + data points

function Grid({ coin }) {
  return (
    <Link to= {`/coins?${coin.id}`}>
      <div className="coin-box">
        <div className="logo-div">
          <img src={coin.image} className="logo" />
          <div className="coin-info">
            <p className="symbol">{coin.symbol}-USD</p>
            <p className="name">{coin.name}</p>
          </div>
        </div>
        <div className="data-div">
          {coin.price_change_percentage_24h > 0 ? (
            <div className="chip-flex">
              <div
                className="chip"
                style={{
                  color: "var(--green)",
                  borderColor: "var(--green)",
                }}>
                {"+" + coin.price_change_percentage_24h.toFixed(2) + " %"}
              </div>
              <TrendingUpRoundedIcon className="trending-icon" />
            </div>
          ) : (
            <div className="chip-flex">
              <div className="chip red">
                {coin.price_change_percentage_24h.toFixed(2) + " %"}
              </div>
              <TrendingDownRoundedIcon className="trending-icon red" />
            </div>
          )}
          {coin.price_change_percentage_24h > 0 ? (
            <p className="price">${coin.current_price.toLocaleString()}</p>
          ) : (
            <p className="price price-red">
              ${coin.current_price.toLocaleString()}
            </p>
          )}
          <p className="name">
            <span className="sub-heading">Total Volume : </span>$
            {coin.total_volume.toLocaleString()}
          </p>
          <p className="name">
            <span className="sub-heading">Market Cap : </span> $
            {coin.market_cap.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Grid;