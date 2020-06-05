import React from "react";
import PropTypes from "prop-types";

export default function FarmInfo({ farm }) {
  return (
    <>
      <div>
        <p>
          <span>Farm: </span>
          {farm.name}
        </p>
        <p>
          <span> Culture: </span>
          {farm.culture}
        </p>
        <p>
          <span> Variety: </span>
          {farm.variety}
        </p>
        <p>
          <span> Area: </span>
          {farm.total_area}
        </p>
        <p>
          <span> Yield estimation: </span>
          {farm.yield_estimation}
        </p>
        <p>
          <span> Total: </span>
          {+farm.total_area * +farm.yield_estimation}
        </p>
        <p>
          <span> Price: </span>
        </p>
        <div className="btn-container">
          <button>BUY NOW</button>
          <button>BID</button>
        </div>
      </div>
      <div>
        <select>FARM</select>
      </div>
    </>
  );
}

FarmInfo.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
  farm: PropTypes.object
};
