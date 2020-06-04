import React from "react";
// import Map from "./Map";
import SearchInfo from "./SearchInfo";
import MapLeaflet from "./MapLeaflet";

export default function Content() {
  return (
    <div className="content-container">
      <MapLeaflet />
      <SearchInfo />
    </div>
  );
}
