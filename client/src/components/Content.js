import React, { useState } from "react";
// import Map from "./Map";
import SearchInfo from "./SearchInfo";
import MapLeaflet from "./MapLeaflet";

export default function Content() {
  const [search, setSearch] = useState("");

  return (
    <div className="content-container">
      <MapLeaflet search={search} setSearch={setSearch} />
      <SearchInfo search={search} setSearch={setSearch} />
    </div>
  );
}
