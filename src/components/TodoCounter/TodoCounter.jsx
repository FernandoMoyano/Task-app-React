import './TodoCounter.css'
// eslint-disable-next-line react/prop-types
function TodoCounter({ totalTodos, completedTodos }) {
  return (
    <h1 className='todoCounter'>
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span>{' '}
      TODOS
    </h1>
  )
}

export { TodoCounter }
