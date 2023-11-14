import "./TodoList.css"
/* eslint-disable react/prop-types */
const TodoList = (props) => {
  return (
    <ul className="todoList">
      {props.children}
    </ul>
  );
};

export default TodoList;
