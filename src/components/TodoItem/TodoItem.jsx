/* eslint-disable react/prop-types */
const TodoItem = (props) => {
  return (
    <div>
      <li>
        <span>✅{props.completed}</span>
        <p>{props.text}</p>
        <span>❌</span>
      </li>
    </div>
  );
};

export default TodoItem;
