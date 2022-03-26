import React from "react";
import Formulario from "./components/Formulario";
import FormNoControlado from "./components/FormNoControlado";

const App = () => {
  return (
    <div className="container ">
      <h1 className="text-center my-5">Formulario</h1>
   
      <Formulario />
      <FormNoControlado />
    </div>
  );
};

export default App;
