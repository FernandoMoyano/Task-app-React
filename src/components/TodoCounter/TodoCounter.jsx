import "./TodoCounter.css";
// eslint-disable-next-line react/prop-types
function TodoCounter({ total, completed }) {
  return (
    <h1 className="todoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOS
    </h1>
  );
}

export { TodoCounter };
