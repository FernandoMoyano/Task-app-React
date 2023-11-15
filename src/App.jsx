import "./index.css";
import CreateTodoButton from "./components/CreateTodoButton/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoList from "./components/TodoList/TodoList";
import TodoSearch from "./components/TodoSearch/TodoSearch";
import { useState } from "react";

const dafaultTodos = [
  {
    text: "Leer Libro de ciencia",
    completed: false,
  },

  {
    text: "Comprar alimentos",
    completed: true,
  },
];

function App() {
  const [todos, setTodos] = useState(dafaultTodos);
  const [searchValue, setSearchValue] = useState("");
  /* Estados derivados */
  const completedTodos=todos.filter(
    todo => todo.completed).length;
    
  const totalTodos=todos.length;

  const searchedTodos=todos.filter(
    todo => todo.text.includes(searchValue))

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
        {dafaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
      />
        ))}

      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
