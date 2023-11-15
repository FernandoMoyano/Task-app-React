import "./index.css";
import CreateTodoButton from "./components/CreateTodoButton/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoList from "./components/TodoList/TodoList";
import TodoSearch from "./components/TodoSearch/TodoSearch";
import { useState } from "react";

const dafaultTodos = [
  {
    text: "Leer Libro",
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

  const completedTodos=todos.filter(todo=>todo.completed).length;
  const totalTodos=todos.length;

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
