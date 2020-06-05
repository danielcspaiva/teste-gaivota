import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import Navbar from "../../components/Navbar";
// import FarmContent from "../../components/FarmContent";
import axios from "axios";
import FarmInfo from "../../components/FarmInfo";
import MapLeaflet from "../../components/MapLeaflet";
import Graph from "../../components/Graph";

export default function Farm({ match }) {
  const id = match.params.id;
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
        let farmRes = res.data[0].filter(farm => farm.farm_id == `${id}`)[0];
        setCenter([farmRes.latitude, farmRes.longitude]);
        setData(res.data);
        setFarm(farmRes);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="main-container">
      <Navbar />
      <div className="content-container">
        <MapLeaflet center={center} farms={farms} />
        <div className="search-info-container">
          {data.length && farm && <Graph farm={farm} data={data} />}
          {farm && <FarmInfo farm={farm} />}
        </div>
      </div>
    </div>
  );
}

Farm.propTypes = {
  match: PropTypes.object
};
