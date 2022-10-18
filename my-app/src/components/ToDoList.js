import  React, {useState}  from "react";
import TodoForm from "./ToDoForm";

function ToDoList() {
  const [todos, setTodos] = useState([]);

  // eslint-disable-next-line
  const addToDo = todo => {
    if(!todo.text || /^\s*$/.text(todo.text)){
      return 
    }

    const newToDos = [todo, ...todos];
    setTodos(newToDos);


  }

  return(
    <div>
      <h1>What's the plan for today?</h1>
      <TodoForm onSubmit={addToDo}/>
    </div>

  )
}

export default ToDoList;