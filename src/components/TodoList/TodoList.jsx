import './TodoList.css'
/* eslint-disable react/prop-types */
const TodoList = (props) => {
  return (
    <section className='todoList-container'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {props.searchedTodos.map(props.render)}

      <ul>{props.children}</ul>
    </section>
  )
}

export default TodoList
