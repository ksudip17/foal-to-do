import useTodoContext from "../contexts/useTodoContext";

const MyComponent = () => {
  const { todos, addTodo } = useTodoContext();

  return (
    <div>
      <h1>Todos:</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <button onClick={() => addTodo("New todo")}>Add Todo</button>
    </div>
  );
};

export default MyComponent;
