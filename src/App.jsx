import "./App.css";

function App() {
  return (
    <div>
      <div>Hola Mundo</div>
      <TodoCounter />
      <TodoSearch/>
      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>
      <CreateTodoButton/>
    </div>
  );
}

export default App;
