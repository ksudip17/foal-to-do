import React, { useState } from "react";
import TodoContext from "./TodoContext";

interface Todo {
  id: number;
  text: string;
}

interface CustomError extends Error {
  status: number;
  statusText: string;
  method: string;
  url: string;
}

interface TodoProviderProps {
  children: React.ReactNode;
}

const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<CustomError | null>(null);

  const addTodo = (text: string) => {
    const newTodo = { id: todos.length + 1, text };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, deleteTodo, error, setError }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
