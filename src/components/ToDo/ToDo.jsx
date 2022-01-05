import TaskList from '../TaskList/TaskList'; 
import Search from './../Search/Search';
import AddItem from './../AddItem/AddItem';

import './ToDo.css'; 







function ToDo() { 
    return( 
        <div className="ToDo">  
        <h1> Works</h1>
        <Search /> 
        <TaskList /> 
        <AddItem />
        </div>

    )


}

export default ToDo; 