import React, {useState,useDispatch} from 'react';
import { v4 as uuidv4 } from 'uuid';



const TodoForm = () => {
  const [input, setInput] = useState('');
  // const dispatch = useDispatch();

  const onSubmitHandler = (e)=> {
    e.preventDefault();
    const newToDo = {
      id: uuidv4(),
      text: input
    }
    setInput('')
  };

  const handleChahge = e => {
    setInput(e.target.value)
  }




  return (
    <div>
      <form className='todo-form' onSubmit={onSubmitHandler}>
        <input 
        type="text" 
        placeholder='What should you do?'
        value={input} 
        name='text' 
        className='todo-input'
        onChange={handleChahge}
        />
      <button onClick={onSubmitHandler} className='todo-button'>
        Add todo
      </button>
      </form>
    </div>
  )
}


export default TodoForm;