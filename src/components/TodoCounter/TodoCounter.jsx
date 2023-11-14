import "./TodoCounter.css"
// eslint-disable-next-line react/prop-types
function TodoCounter({ total, completed }) {
  return (
    <h1>
      Has completado {completed} de {total} TODOS
    </h1>
  );
}

export { TodoCounter };
