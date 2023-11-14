import "./TodoItem.css"
/* eslint-disable react/prop-types */
const TodoItem = (props) => {
  return (
    <div>
      <li className="todoItem">
        <span className="icon icon-check icon-chek--active">
          ✅{props.completed}
        </span>
        <p className="todoItem-p todoItem-p--complete">{props.text}</p>
        <span className="icon icon-delete">❌</span>
      </li>
    </div>
  );
};

export default TodoItem;
