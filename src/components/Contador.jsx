import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  const Aumentar = () => {
    setContador(contador + 1);
  };

  return (
    <>
      <h2 className=" text-primary my-4">Contador</h2>
      <p>{contador}</p>
      <button className="btn btn-success" onClick={Aumentar}>
        Aumentar
      </button>
    </>
  );
};

export default Contador;
