/* eslint-disable react/prop-types */
import { useState } from 'react'
import useLocalStorage from '../Hooks/useLocalStorage'

const useTodos = () => {
  /*✅ Estados */
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', [])
  //Buscador
  const [searchValue, setSearchValue] = useState('')
  //Modal
  const [openModal, setOpenModal] = useState(false)

  /*Estados derivados de todos */
  const completedTodos = todos.filter((todo) => todo.completed).length

  const totalTodos = todos.length

  /*✅ Busqueda filtrada a partír del texto */
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase()
    const searchText = searchValue.toLowerCase()
    return todoText.includes(searchText)
  })

  /*✅ Marcar o desmarcar tarea como completada */
  const handleComplete = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text == text)
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    /* Guardamos cambios en localStorage */
    saveTodos(newTodos)
  }
  /*✅ Agregar todo */
  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      text,
      completed: false,
    })

    /* Guardamos cambios en localStorage */
    saveTodos(newTodos)
  }

  /*✅ Eliminar todo */
  const handleDelete = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text == text)
    newTodos.splice(todoIndex, 1)
    /* Guardamos cambios en localStorage */
    saveTodos(newTodos)
  }

  return {
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
    addTodo,
  }
}

export { useTodos }
