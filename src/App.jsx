import "./App.css";
import CreateTodoButton from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";

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
  return (
    <div>
      <div>Hola Mundo</div>
      <TodoCounter completed={16} total={30} />
      <TodoSearch />
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
