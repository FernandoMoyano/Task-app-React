/* eslint-disable react/prop-types */
const TodoList = (props) => {
  return (
    <ul>
      {props.children}
    </ul>
  );
};

export default TodoList;
