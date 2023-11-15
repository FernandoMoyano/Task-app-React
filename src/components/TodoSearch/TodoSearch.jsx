import { useState } from "react";
import "./TodoSearch.css";
const TodoSearch = () => {
  const [searchValue, setSearchValue] = useState("");
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
