import { useState } from "react";
import styles from "./TodoForm.module.css";
import moment from "moment";

function TodoForm(props) {
  const { createTodo } = props;

  const [text, setText] = useState("");

  function createTodoOnSubmit(event) {
    event.preventDefault();
    const date = String(moment().format("MMMM Do YYYY, h:mm:ss a"));
    createTodo(text, date);
    setText("");
  }
  return (
    <div className={styles.TodoFormContainer}>
      <form onSubmit={createTodoOnSubmit}>
        <input
          type="text"
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default TodoForm;
