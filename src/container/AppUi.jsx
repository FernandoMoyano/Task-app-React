/* eslint-disable react/prop-types */
import CreateTodoButton from "../components/CreateTodoButton/CreateTodoButton";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import TodoItem from "../components/TodoItem/TodoItem";
import TodoList from "../components/TodoList/TodoList";
import TodoSearch from "../components/TodoSearch/TodoSearch";

const AppUi = ({
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  handleComplete,
  handleDelete,
}) => {
  return (
    <div>
      <TodoCounter completed={completedTodos} total={totalTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
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
      <CreateTodoButton />
    </div>
  );
};

export default AppUi;
