import React, { useState } from "react";
import PintarError from "./AlertDanger";

const Formulario = () => {
  const [todo, setTodo] = useState({
    todoName: "",
    todoDescripcion: "",
    todoEstado: "pendiente",
    todoCheck: false,
  });

 const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todo.todoName.trim() || !todo.todoDescripcion.trim()) {
      setError(true);
      return;
    }
    setError(false);

    setTodo({
        todoName: "",
        todoDescripcion: "",
        todoEstado: "pendiente",
        todoCheck: false,
      })
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value,
    });
  };


  return (
    <>
      <h2>Formulario controlado</h2>
      
      {error ? <PintarError textError="Campos obligatorios" /> : null}
 
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese todo"
          name="todoName"
          className="form-control mb-2"
          onChange={handleChange}
          value={todo.todoName}
        />
        <textarea
          name="todoDescripcion"
          className="form-control mb-2"
          placeholder="Ingrese la descripción"
          onChange={handleChange}
          value={todo.todoDescripcion}
        />

        <select
          name="todoEstado"
          className="form-control mb-2"
          onChange={handleChange}
          value={todo.todoEstado}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="todoCheck"
            checked={todo.todoCheck}
            onChange={handleChange}
            id="flexCheckDefault"
          />
          <label className="form-check-label mb-2" htmlFor="flexCheckDefault">
            Dar prioridad
          </label>
        </div>

        <button className="btn btn-primary" type="submit">
          Agregar
        </button>
      </form>
    </>
  );
};

export default Formulario;
