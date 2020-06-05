import React, { useState, useEffect } from "react";
// import Map from "./Map";
import FarmInfo from "./FarmInfo";
import MapLeaflet from "./MapLeaflet";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Content() {
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
    <div className="content-container">
      <MapLeaflet center={center} farms={farms} />
      <div className="search-info-container">
        <Link to={"/farm/" + farm.farm_id}>
          <h1>{farm.name}</h1>
        </Link>
        <div>
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
  );
}
