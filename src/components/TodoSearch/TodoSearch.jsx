import './TodoSearch.css'
// eslint-disable-next-line react/prop-types
const TodoSearch = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <input
        className='todoSearch'
        placeholder='Escribe aquí tu tarea'
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value)
        }}
      />
    </>
  )
}

export default TodoSearch
