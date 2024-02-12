import '../styles/index.css'
import CreateTodoButton from '../components/CreateTodoButton/CreateTodoButton'
import { TodoCounter } from '../components/TodoCounter/TodoCounter'
import TodoItem from '../components/TodoItem/TodoItem'
import TodoList from '../components/TodoList/TodoList'
import TodoSearch from '../components/TodoSearch/TodoSearch'
import TodosError from '../components/TodosError/TodosError'
import TodosLoading from '../components/Todosloading/TodosLoading'
import { useTodos } from '../context/useTodos'
import Modal from '../components/Modal/Modal'
import TodoForm from '../components/TodoForm/TodoForm'
import TodoHader from '../components/TodoHeader/TodoHader'

/* localStorage.setItem('TODOS_V1', JSON.stringify(dafaultTodos))
 */
function App() {
  const {
    loading,
    error,
    searchedTodos,
    handleComplete,
    handleDelete,
    openModal,
    setOpenModal,
    totalTodos,
    completeTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos()

  return (
    <>
      <TodoHader>
        <TodoCounter totalTodos={totalTodos} completeTodos={completeTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        render={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={handleComplete(todo.text)}
            onDelete={handleDelete(todo.text)}
          />
        )}
      ></TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  )
}

export default App
