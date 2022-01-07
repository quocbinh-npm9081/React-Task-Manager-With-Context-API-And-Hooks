import React,{useContext} from 'react'
import { TaskListContext } from '../context/TastListContext'

const Task = ({task, index}) => {

    const {removeTask,findTask} = useContext(TaskListContext)
 

    return (

        <div>
            <li className="list-item">
            <span>{task.title}</span>
            <div>
                <button onClick={() => removeTask(index)} className='btn-delete task-btn'>  
                    <i className='bx bx-trash bx-sm'></i>                    
                </button>
                <button  onClick={() =>findTask(index)} className='btn-edit task-btn'>  
                    <i className='bx bxs-edit bx-sm'></i>                 
                </button>
            </div>
            </li>    
        </div>
    )
}

export default Task
