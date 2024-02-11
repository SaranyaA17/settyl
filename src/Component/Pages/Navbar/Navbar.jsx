import React from "react";
import avatar from "../../assets/Avatar.jpg";
import "./navbar.css";
import Home from "../Home/Home";
import { useNavigate } from "react-router";
import { Nav } from "react-bootstrap";
import { IoMdContact } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbarsec-12">
      <Nav style={{
        width:"100%",
        height:'100px',
        display:'flex',
        justifyContent:'space-between',fontSize:'30px',color:'white',alignItems:'center'
      }}>
        <div className="navbar-sec-1">
          <img src={avatar} alt="" onClick={() => navigate("/")} />
        </div>
        <div className="navbar-sec-2">Home</div>
        <div className="navbar-sec-3"><IoMdContact /></div>
      </Nav>
      {/* <div>
        <Home />
      </div> */}
    </div>
  );
};

export default Navbar;
