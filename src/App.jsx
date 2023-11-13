import "./App.css";
import { TodoCounter } from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";


function App() {
  return (
    <div>
      <div>Hola Mundo</div>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;


