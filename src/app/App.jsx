import "../styles/index.css";
import { useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";
import AppUi from "../container/AppUi";

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
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
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
    /* Guardamos cambios en localStorage */
    saveTodos(newTodos);
  };

  /* Eliminar tarea */
  const handleDelete = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos.splice(todoIndex, 1);
    /* Guardamos cambios en localStorage */
    saveTodos(newTodos);
  };

  return (
    <AppUi
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      handleComplete={handleComplete}
      handleDelete={handleDelete}
    />
  );
}

export default App;
