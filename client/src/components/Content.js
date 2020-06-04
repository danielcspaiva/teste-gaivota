import React from "react";
import {
  Map,
  TileLayer,
  Marker,
  Popup
} from "../../node_modules/react-leaflet/src";

export default function Content() {
  const position = [0, 0];
  return (
    <Map center={position} zoom={this.state.zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
}
