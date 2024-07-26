import React, { useContext } from "react";
import TodoContext from "../contexts/TodoContext";

const AddTodo: React.FC = () => {
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = (
      event.currentTarget.elements.namedItem("text") as HTMLInputElement
    ).value;
    addTodo(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" placeholder="Add new todo" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
