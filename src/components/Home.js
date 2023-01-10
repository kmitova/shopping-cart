import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero">
      <div className="hero-items">
        <h1>Healthy and refreshing everyday, now delivering...</h1>
        <Link to="/store">
          <button className="to-store-btn">Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
