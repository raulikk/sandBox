import './TaskList.css'
import starIcon from '../../assets/icons/Star.svg' ; 
import garbageIcon from '../../assets/icons/Garbage.svg'; 

function TaskList() { 
    return ( 
        <ul> 
         
        <li className="task-item"> 
           
            <span className='task-item-inputs' >  
                <input type="checkbox" />                
                <p className='list-text'> Text</p>
            </span>
            <span className='task-item-icons' >  
              <img src= {starIcon} className='icons'/> 
              <img src= {garbageIcon} className='icons'/> 
            </span>
        
        
        
        </li>
           
        
        </ul>
    )



}


export default TaskList