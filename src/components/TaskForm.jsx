import React, {useContext, useState, useEffect} from 'react'

import '../style/taskForm.css'
import  {TaskListContext} from '../context/TastListContext'

const TaskForm = () => {
    const [inputValue, setinputValue] = useState('');

    const {addTask,locationItem, clearTasks, editItem, updateTask, btnTyle} =  useContext(TaskListContext);
   // const inputTag = useRef('input');
    const handleChange =(e) =>{
        setinputValue(e.target.value);
    }
    
    const handleSubmit =(e) =>{

        e.preventDefault();

        if(editItem === null){

            addTask(inputValue);
            setinputValue(""); 
        }else{

            updateTask(inputValue, locationItem);
            setinputValue(""); 

        }
         
    }

    useEffect(() => {
        if(editItem){
            setinputValue(editItem.title);
        }else{
            setinputValue("");
        }
    }, [editItem]);

    return (

        <div>
            <form onSubmit={handleSubmit} className="form">
                <input onChange={handleChange} value={inputValue}  type="text" name="task-input" id="task-input"  className='task-input' placeholder='Add task here.' required/>
            <div className="buttons">
                <button type="submit" className={'btn ' +btnTyle}>
                    {
                        editItem ?  'Update':'Add'          
                    }
                </button>
                <button onClick={clearTasks} className='btn btn-clear'>
                    {
                        editItem ?  'Cancel':'Clear'          
                    }
                </button>
           
            </div>
            </form>
        </div>
    )
}

export default TaskForm
