import { useState } from "react";
import "./App.css";
import TodoForm from "./components/todos/TodoForm";
import TodoList from "./components/todos/TodoList";
import Time from "./components/Time";

function App() {
  const [todos, setTodos] = useState([]);
  const [dates, setDates] = useState([]);

  function createTodoHandler(text, date) {
    setTodos([...todos, text]);
    setDates([...dates, date]);
  }

  function deleteTodoHandler(idx) {
    setTodos(todos.filter((_, index) => index !== idx));
    setDates(dates.filter((_, index) => index !== idx));
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <Time />
      <TodoForm createTodo={createTodoHandler} />
      <TodoList todos={todos} dates={dates} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
