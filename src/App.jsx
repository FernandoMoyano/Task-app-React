import "./App.css";
import CreateTodoButton from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";

function App() {
  return (
    <div>
      <div>Hola Mundo</div>
      <TodoCounter completed={16} total={30} />
      <TodoSearch />
      <TodoList>
        <TodoItem />
        <TodoItem />
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
