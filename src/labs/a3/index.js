import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";
import { useSelector } from "react-redux";

function Assignment3() {
  const { todos } = useSelector((state) => state.todosReducer);

  return (
    <div className="container mb-4">
      <h1>Assignment 3</h1>
      
      <ul className="list-group mb-4">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>

      <TodoItem/>
      <TodoList/>
      <ConditionalOutput/>
      <Styles/>
      <Classes/>
      <PathParameters/>
      <JavaScript/>


    </div>
  );
}
export default Assignment3;