import TodoProvider from "./contexts/TodoProvider";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <TodoProvider>
      <div className="box">
        <h1>To-Do List</h1>
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
