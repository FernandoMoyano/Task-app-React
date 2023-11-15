
import "./TodoSearch.css";
const TodoSearch = (searchValue, setSearchValue) => {
  return (
    <input
      className="todoSearch"
      placeholder="Hacer tarea"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
};

export default TodoSearch;
