import "./TodoForm.css";
const TodoForm = () => {
  return (
    <form>
      <label>Escribe un nuevo Todo</label>
      <textarea placeholder="Hacer ejercicio"></textarea>
      <div className="todoForm-container">
        <button className="todoForm-button todoForm-button--add">
          Agregar
        </button>
        <button className="todoForm-button todoForm-button--cancel">
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
