import "./index.css";
import CreateTodoButton from "./components/CreateTodoButton/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoList from "./components/TodoList/TodoList";
import TodoSearch from "./components/TodoSearch/TodoSearch";
import { useState } from "react";
import useLocalStorage from "./components/Hooks/useLocalStorage";

/* const dafaultTodos = [
  {
    text: "Leer Libro de ciencia",
    completed: false,
  },

  {
    text: "Comprar alimentos",
    completed: true,
  },
  {
    text: "Revisar correo",
    completed: true,
  },
];

localStorage.setItem("TODOS_V1", JSON.stringify(dafaultTodos)); */

function App() {
  /* Estados */
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");

  /* Estados derivados de todos */
  const completedTodos = todos.filter((todo) => todo.completed).length;

  const totalTodos = todos.length;

  /* Busqueda filtrada a partír del texto */
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  /* Marcar o desmarcar tarea como completada */
  const handleComplete = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

    saveTodos(newTodos);
  };

  /* Eliminar tarea */
  const handleDelete = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos.splice(todoIndex, 1);

    saveTodos(newTodos);
  };

  return (
    <div>
      <TodoCounter completed={completedTodos} total={totalTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => handleComplete(todo.text)}
            onDelete={() => handleDelete(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
