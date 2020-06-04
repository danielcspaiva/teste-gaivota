import React from "react";
// import PropTypes from "prop-types";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapLeaflet() {
  const center = [51.505, -0.09];

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

// MapLeaflet.propTypes = {
//   center: PropTypes.array,
//   geoJson: PropTypes.array
// }
