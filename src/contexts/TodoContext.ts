import { createContext } from 'react';

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

interface TodoContextValue {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  error: CustomError | null;
  setError: (error: CustomError | null) => void;
}

const TodoContext = createContext<TodoContextValue>({
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
  error: null,
  setError: () => {},
});

export default TodoContext;
