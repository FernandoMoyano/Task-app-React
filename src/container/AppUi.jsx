/* eslint-disable react/prop-types */
import CreateTodoButton from "../components/CreateTodoButton/CreateTodoButton";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import TodoItem from "../components/TodoItem/TodoItem";
import TodoList from "../components/TodoList/TodoList";
import TodoSearch from "../components/TodoSearch/TodoSearch";
import TodosError from "../components/TodosError/TodosError";
import TodosLoading from "../components/Todosloading/TodosLoading";
import { TodoContext } from "../context/TodoContext";

const AppUi = () => {
  return (
    <div>
      <TodoCounter />
      <TodoSearch />

      <TodoContext.Consumer>
        {({ loading, error, searchedTodos, handleComplete, handleDelete }) => (
          <TodoList>
            {loading && <TodosLoading />}
            {error && <TodosError />}
            {!loading && searchedTodos.length === 0 && (
              <p>¡crea tu primer TODO!</p>
            )}
            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => handleComplete(todo.text)}
                onDelete={() => handleDelete(todo.text)}
              />
            ))}
          </TodoList>
        )}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </div>
  );
};

export default AppUi;
