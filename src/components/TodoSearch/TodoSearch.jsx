import { useContext } from "react";
import "./TodoSearch.css";
import { TodoContext } from "../../context/TodoContext";
// eslint-disable-next-line react/prop-types
const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  return (
    <>
      <input
        className="todoSearch"
        placeholder="Escribe aquí tu tarea"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </>
  );
};

export default TodoSearch;
