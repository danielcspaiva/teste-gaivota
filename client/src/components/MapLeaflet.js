import React from "react";
import { Map, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import PropTypes from "prop-types";

export default function MapLeaflet({ center, farms }) {
  return (
    <Map center={center.length && center} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {farms.map((farm, idx) => (
        <GeoJSON key={idx} data={farm} />
      ))}
    </Map>
  );
}

MapLeaflet.propTypes = {
  center: PropTypes.array,
  farms: PropTypes.array
};
