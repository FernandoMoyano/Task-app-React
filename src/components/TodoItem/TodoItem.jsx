import './TodoItem.css'
/* eslint-disable react/prop-types */
import CompleteIcon from '../CompleteIcon/CompleteIcon'
import DeleteIcon from '../DeleteIcon/DeleteIcon'
const TodoItem = (props) => {
  return (
    <div>
      <li className='todoItem'>
        <CompleteIcon
          className={`icon icon-check 
          ${props.completed && 'icon-check--active'}`}
          onClick={props.onComplete}
        >
          V{props.completed}
        </CompleteIcon>
        <p
          className={`todoItem-p ${props.completed && 'todoItem-p--complete'}`}
        >
          {props.text}
        </p>
        <DeleteIcon className='icon icon-delete' onClick={props.onDelete}>
          X
        </DeleteIcon>
      </li>
    </div>
  )
}

export default TodoItem
