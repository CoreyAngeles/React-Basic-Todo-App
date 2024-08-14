import { RiBriefcaseFill } from "react-icons/ri";
import styles from "./Todo.module.css";

function Todo(props) {
  const { text, deleteTodo, index, date } = props;

  return (
    <div
      className={styles.todo}
      onDoubleClick={() => {
        deleteTodo(index);
      }}
    >
      <RiBriefcaseFill className={styles.icon} />
      <p>{date}</p>
      {text}
    </div>
  );
}

export default Todo;
