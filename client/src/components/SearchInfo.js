import React from "react";
import PropTypes from "prop-types";

export default function SearchInfo({ search, setSearch }) {
  return (
    <div className="search-info-container">
      <input
        type="text"
        placeholder="SEARCH BAR"
        value={search}
        onChange={e => setSearch(e.target.value)}
      ></input>
      <div>
        <p> Farm info </p>
      </div>
    </div>
  );
}

SearchInfo.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func
};
