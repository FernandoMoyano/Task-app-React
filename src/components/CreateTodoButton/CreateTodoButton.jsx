/* eslint-disable react/prop-types */
import './createTodoButton.css'

const CreateTodoButton = (props) => {
  const onClickButton = () => {
    props.setOpenModal((prevState) => !prevState)
  }
  return (
    <button className='createTodoButton' onClick={onClickButton}>
      +
    </button>
  )
}

export default CreateTodoButton
