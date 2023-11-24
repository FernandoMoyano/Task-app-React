/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

const TodoContext = createContext();
const TodoProvider = ({ children }) => {
  /* Estados */
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  //Buscador
  const [searchValue, setSearchValue] = useState("");
  //Modal
  const [openModal, setOpenModal] = useState(false);

  /* Estados derivados de todos */
  const completedTodos = todos.filter((todo) => todo.completed).length;

  const totalTodos = todos.length;

  /* Busqueda filtrada a partír del texto */
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  /* Marcar o desmarcar tarea como completada */
  const handleComplete = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    /* Guardamos cambios en localStorage */
    saveTodos(newTodos);
  };
  /* Agregar todo */
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });

    /* Guardamos cambios en localStorage */
    saveTodos(newTodos);
  };

  /* Eliminar todo */
  const handleDelete = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos.splice(todoIndex, 1);
    /* Guardamos cambios en localStorage */
    saveTodos(newTodos);
  };

  //Abrir o cerrar Modal
  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        handleComplete,
        handleDelete,
        openModal,
        setOpenModal,
        handleModal,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
