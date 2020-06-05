import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
// import Content from "../../components/Content";
import FarmInfo from "../../components/FarmInfo";
import MapLeaflet from "../../components/MapLeaflet";
import axios from "axios";
import { Link } from "react-router-dom";
// import { logout } from "../../auth";

const Home = () => {
  // TODO: use logout when user logged in
  const [search, setSearch] = useState("");
  const [center, setCenter] = useState([]);
  const [data, setData] = useState([]);
  const [farms, setFarms] = useState([]);
  const [farm, setFarm] = useState({});
  console.log(data);
  useEffect(() => {
    axios
      .get("http://localhost:5000/farms")
      .then(res => {
        setFarms(res.data);
      })
      .catch(err => console.log(err));
    axios
      .get("http://localhost:5000/data")
      .then(res => {
        setCenter([res.data[0][0].latitude, res.data[0][0].longitude]);
        setData(res.data);
        setFarm(res.data[0][0]);
      })
      .catch(err => console.log(err));
  }, [search]);

  return (
    <div className="main-container">
      <Navbar />
      <div className="content-container">
        <MapLeaflet center={center} farms={farms} />
        <div className="search-info-container">
          <div>
            <Link to={"/farm/" + farm.farm_id}>
              <h1> {farm.name} </h1>
            </Link>
            <input
              type="text"
              placeholder="SEARCH BAR"
              value={search}
              onChange={e => setSearch(e.target.value)}
            ></input>
          </div>
          <FarmInfo farm={farm} />
        </div>
      </div>
    </div>
  );
};

export default Home;
