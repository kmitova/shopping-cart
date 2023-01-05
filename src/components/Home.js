import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Some title</h1>
      <h2>img background</h2>
      <Link to="/store">
        <button>To store</button>
      </Link>
    </div>
  );
};

export default Home;
