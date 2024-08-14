import Todo from "./Todo";

function TodoList(props) {
  const { todos, deleteTodo, dates } = props;
  return (
    <div>
      {!todos.length ? (
        <h3>Todo list is empty</h3>
      ) : (
        todos.map((todo, index) => {
          return (
            <Todo
              date={dates[index]}
              key={index}
              text={todo}
              index={index}
              deleteTodo={deleteTodo}
            />
          );
        })
      )}
    </div>
  );
}

export default TodoList;
