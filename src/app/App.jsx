import "../styles/index.css";
import AppUi from "../container/AppUi";
import { TodoProvider } from "../context/TodoContext";

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
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
