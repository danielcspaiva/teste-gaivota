import React from "react";
import logo from "../assets/logo192.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <Link to="/login">LOGIN</Link>
    </nav>
  );
}
