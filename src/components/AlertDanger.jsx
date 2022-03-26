import React from "react";

const PintarError = (props) => {
  return <div className="alert alert-danger">{props.textError}</div>;
};

export default PintarError;
