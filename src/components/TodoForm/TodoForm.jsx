/* eslint-disable react/prop-types */
import { useState } from 'react'
import './TodoForm.css'
const TodoForm = ({ addTodo, setOpenModal }) => {
  const [newTodoValue, setNewTodoValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(false)
  }
  //Cancelar
  const handleCancelSubmit = () => {
    setOpenModal(false)
  }
  //Registar el ingreso del usuario
  const handleChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  return (
    <form>
      <label>Escribe un nuevo Todo</label>
      <textarea
        placeholder='Hacer ejercicio'
        value={newTodoValue}
        onChange={handleChange}
      ></textarea>
      <div className='todoForm-buttonContainer'>
        <button
          onClick={handleSubmit}
          type='button'
          className='todoForm-button todoForm-button--add'
        >
          Agregar
        </button>
        <button
          onClick={handleCancelSubmit}
          type='button'
          className='todoForm-button todoForm-button--cancel'
        >
          Cancelar
        </button>
      </div>
    </form>
  )
}

export default TodoForm
