import HelloReducer from "./ReduxExamples/HelloRedux"
import CounterRedux from "./ReduxExamples/CounterRedux"
import AddRedux from "./ReduxExamples/AddRedux"
import TodoList from "./ReduxExamples/todos/TodoList"

const Assignment4 = () => {
  return (
    <div className="container mb-3">
      <h1>Assignment 4</h1>
      <HelloReducer/>
      <CounterRedux/>
      <AddRedux/>
      <TodoList/>
    </div>
  )
}

export default Assignment4