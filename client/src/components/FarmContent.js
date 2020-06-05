import React, { useState, useEffect } from "react";
import axios from "axios";
import FarmInfo from "./FarmInfo";
import MapLeaflet from "./MapLeaflet";
import Graph from "./Graph";

export default function FarmGraph() {
  const [center, setCenter] = useState([]);
  const [data, setData] = useState([]);
  const [farms, setFarms] = useState([]);
  const [farm, setFarm] = useState(null);
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
  }, []);

  return (
    <div className="content-container">
      <MapLeaflet center={center} farms={farms} />
      <div className="search-info-container">
        {data.length && farm && <Graph farm={farm} data={data} />}
        {farm && <FarmInfo farm={farm} />}
      </div>
    </div>
  );
}
