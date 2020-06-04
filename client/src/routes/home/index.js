import React from "react";
import Navbar from "../../components/Navbar";
import Content from "../../components/Content";
// import { logout } from "../../auth";

const Home = () => {
  // TODO: use logout when user logged in

  return (
    <>
      <Navbar />
      <Content />
    </>
  );
};

export default Home;
