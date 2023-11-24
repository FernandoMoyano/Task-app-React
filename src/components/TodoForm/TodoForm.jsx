import { useContext } from "react";
import "./TodoForm.css";
import { TodoContext } from "../../context/TodoContext";
const TodoForm = () => {
  const { setOpenModal } = useContext(TodoContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpenModal(false);
  };

  const handleCancelSubmit = () => {
    setOpenModal(false);
  };
  return (
    <form>
      <label>Escribe un nuevo Todo</label>
      <textarea placeholder="Hacer ejercicio"></textarea>
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
