import React from "react";
import "./home.css";
import Child from "../Child/TableChild";
import Drop from "../Drop/Drop";

// Parent component
const Home = () => {
  return (
    <div className="home">
      {/* <h1>Users</h1> */}
      <div className="container">
        <div className="home-sec">
          <Drop />
        </div>
      </div>
    </div>
  );
};

export default Home;
