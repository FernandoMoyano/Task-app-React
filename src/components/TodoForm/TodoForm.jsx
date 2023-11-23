const TodoForm = () => {
  return (
    <form>
      <label>Escribe un nuevo Todo</label>
      <textarea placeholder="Hacer ejercicio"></textarea>
      <button className="todoForm-button--cancel"></button>
      <button className="todoForm-button--add"></button>
    </form>
  )
}

export default TodoForm