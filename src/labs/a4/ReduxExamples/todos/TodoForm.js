import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

function TodoForm() {
  const { todo } = useSelector((state) => state.todosReducer);
  const dispatch = useDispatch();

  return (
    <li className="list-group-item">
      <div className="d-flex flex-row">
        <input
          className="form-control"
          value={todo.title}
          onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value })) }
        />
        <button className="ms-3 btn btn-warning" onClick={() => dispatch(updateTodo(todo))}> Update </button>
        <button className="ms-2 btn btn-success" onClick={() => dispatch(addTodo(todo))}> Add </button>
      </div>
    </li>
  );
}

export default TodoForm;