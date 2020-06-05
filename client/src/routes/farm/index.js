import React from "react";
import { PropTypes } from "prop-types";
import Navbar from "../../components/Navbar";
import FarmContent from "../../components/FarmContent";

export default function Farm({ match }) {
  const id = match.params.id;

  return (
    <>
      <Navbar />
      <FarmContent farmId={id} />
    </>
  );
}

Farm.propTypes = {
  match: PropTypes.object
};
