import { useContext, useState } from "react";
import "./TodoForm.css";
import { TodoContext } from "../../context/TodoContext";
const TodoForm = () => {
  const { setOpenModal } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpenModal(false);
  };

  const handleCancelSubmit = () => {
    setOpenModal(false);
  };

  const handleChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form>
      <label>Escribe un nuevo Todo</label>
      <textarea
        placeholder="Hacer ejercicio"
        value={newTodoValue}
        onChange={handleChange}
      ></textarea>
      <div className="todoForm-buttonContainer">
        <button
          onClick={handleSubmit}
          type="button"
          className="todoForm-button todoForm-button--add"
        >
          Agregar
        </button>
        <button
          onClick={handleCancelSubmit}
          type="button"
          className="todoForm-button todoForm-button--cancel"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
