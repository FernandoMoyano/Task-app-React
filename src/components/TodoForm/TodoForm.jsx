const TodoForm = () => {
  return (
    <form>
      <label>Escribe un nuevo Todo</label>
      <textarea placeholder="Hacer ejercicio"></textarea>
      <button className="todoForm-button--cancel">Cancelar</button>
      <button className="todoForm-button--add">Agregar</button>
    </form>
  )
}

export default TodoForm