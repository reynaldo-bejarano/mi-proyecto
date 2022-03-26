import { useRef } from "react";

const FormNoControlado = () => {
  const formulario = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const datos = new FormData(formulario.current);
    const objDatos = Object.fromEntries([...datos.entries()]);

    const {todoName } = objDatos;
    if (!todoName.trim()) {
      console.log("No pasó");
      return;
    }
    console.log("Pasó validaciones");
  };

  return (
    <div className="my-5">
      <h2>No controlado</h2>
      <form ref={formulario} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese todo"
          name="todoName"
          className="form-control mb-2"
          defaultValue="Tarea 01"
        />
        <textarea
          name="todoDescripcion"
          className="form-control mb-2"
          placeholder="Ingrese la descripción"
          defaultValue="Descripcion tarea 01"
        />

        <select
          name="todoEstado"
          className="form-control mb-2"
          defaultValue="pendiente"
        >
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>
        <button className="btn btn-primary">Agregar</button>
      </form>
    </div>
  );
};

export default FormNoControlado;
