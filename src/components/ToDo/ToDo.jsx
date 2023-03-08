import React, { useState} from 'react'; 

import TaskList from '../TaskList/TaskList'; 
import Search from './../Search/Search';
import AddItem from './../AddItem/AddItem';

import './ToDo.css'; 




function ToDo() { 

    const [todos, setTodos] = useState(["time", "apples"]) ; 
    const [inputValue, setInputValue] = useState(''); 

    const addTodo = () => {
        if (inputValue.trim() !== '') {
          setTodos([...todos, inputValue]);
          setInputValue('');
          console.log(todos, inputValue); 
        }
      };
    
      const removeTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
      };



    return( 
        
    <div className="ToDo">  

        {/* <Search /> 
        <TaskList /> 
        <AddItem /> */}


  <h1>Todo App</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>



    
    </div>

    )


}

export default ToDo; 