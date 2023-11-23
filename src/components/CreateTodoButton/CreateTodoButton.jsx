import "./createTodoButton.css";
import { TodoContext } from "../../context/TodoContext";
import { useContext } from "react";

const CreateTodoButton = () => {
  const { handleModal } = useContext(TodoContext);
  return (
    <button className="createTodoButton" onClick={() => handleModal()}>
       +
    </button>
  );
};

export default CreateTodoButton;
