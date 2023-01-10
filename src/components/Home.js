import React from "react";
import "animate.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero">
      <div className="hero-items animate__animated animate__slideInLeft">
        <h1>Healthy and refreshing everyday, now delivering...</h1>
        <Link to="/store">
          <button className="to-store-btn animate__animated animate__slideInUp">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
