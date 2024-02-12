import React from "react";
import "./home.css";
import Child from "../Child/TableChild";
import Drop from "../Drop/Drop";
import Chart from "../Chart/Chart";

// Parent component
const Home = () => {
  return (
    <div className="home">
      {/* <h1>Users</h1> */}
      <div className="container">
        <div className="home-sec">
        <Chart/>
        </div>
      </div>
    </div>
  );
};

export default Home;
