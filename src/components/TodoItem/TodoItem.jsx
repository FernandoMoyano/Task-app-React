import "./TodoItem.css";
/* eslint-disable react/prop-types */
const TodoItem = (props) => {
  return (
    <div>
      <li className="todoItem">
        <span
          className={`icon icon-check 
          ${props.completed && "icon-check--active"}`}
          onClick={props.onComplete}
        >
          V{props.completed}
        </span>
        <p
          className={`todoItem-p ${props.completed && "todoItem-p--complete"}`}
        >
          {props.text}
        </p>
        <span className="icon icon-delete" onClick={props.onDelete}>
          X
        </span>
      </li>
    </div>
  );
};

export default TodoItem;
