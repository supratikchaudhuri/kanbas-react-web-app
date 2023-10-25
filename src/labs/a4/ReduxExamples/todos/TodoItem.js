import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

function TodoItem({todo}) {
  const dispatch = useDispatch();

  return (
    <li key={todo.id} className="list-group-item">
      <div className="d-flex flex-row align-items-center">
        {todo.title}
        <button className="ms-auto btn btn-primary" onClick={() => dispatch(setTodo(todo))}> Edit </button>
        <button className="ms-2 btn btn-danger" onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>
      </div>
    </li>
  );
}

export default TodoItem;