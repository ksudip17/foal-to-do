import React, { useContext } from "react";
import TodoContext from "../contexts/TodoContext";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const TodoList: React.FC = () => {
  const { todos, deleteTodo, error } = useContext(TodoContext);

  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
      ))}
      <AddTodo />
      {error && (
        <div className="box error-box">
          <div className="error-header">
            Error {error.status}: {error.statusText}
          </div>
          <div className="error-body">
            <strong>Request:</strong>
            <br />- Method: {error.method}
            <br />- URL: {error.url}
          </div>
        </div>
      )}
    </>
  );
};

export default TodoList;
