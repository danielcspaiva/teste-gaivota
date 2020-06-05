import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import PropTypes from "prop-types";

export default function MapLeaflet({ search, setSearch }) {
  const center = [51.505, -0.09];
  const [data, setData] = useState([]);
  console.log(data[0]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/data")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [search, setSearch]);

  return (
    <Map center={center} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
}

MapLeaflet.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func
};
