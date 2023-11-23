import { useContext } from "react";
import "./TodoCounter.css";
import { TodoContext } from "../../context/TodoContext";
// eslint-disable-next-line react/prop-types
function TodoCounter() {
  const {completedTodos, totalTodos}=useContext(TodoContext);
  return (
    <h1 className="todoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
    </h1>
  );
}

export { TodoCounter };
