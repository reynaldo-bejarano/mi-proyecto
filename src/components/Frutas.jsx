import React from "react";

const Frutas = (props) => {
  return (
    <div>
      <ul>
        {props.frutasApp.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
  
    </div>
  );
};

export default Frutas;
