import "./index.css";
import CreateTodoButton from "./components/CreateTodoButton/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoList from "./components/TodoList/TodoList";
import TodoSearch from "./components/TodoSearch/TodoSearch";
import { useState } from "react";

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
  /* Local storage */
  const localStorageTodos = localStorage.getItem("TODOS_V1");
  let parseTodos;
  if (!localStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parseTodos = [];
  } else {
    parseTodos = JSON.parse(localStorageTodos);
  }

  /* Estados */
  const [todos, setTodos] = useState(parseTodos);
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
    localStorage.setItem("TODOS_V1", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  /* Eliminar tarea */
  const handleDelete = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos.splice(todoIndex, 1);
    localStorage.setItem("TODOS_V1", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  return (
    <div>
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} 

      />

      <TodoSearch 
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 

      />

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
