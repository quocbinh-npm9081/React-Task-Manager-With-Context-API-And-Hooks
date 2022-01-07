import React,{useContext} from 'react'
import { TaskListContext } from '../context/TastListContext'
import Task from './Task'
import  '../style/tatskList.css'
export const TaskList = () => {
    const {tasks} = useContext(TaskListContext)
    return (
        <div>
            {

                tasks.length !== 0 ? 
                (
                    <ul className="list">
                    {
                        tasks.map((task, index)=>{
                            return <Task task={task} key={index} index={index}/>
                        })
                    }
                    </ul>
                ) : (
                    
                        <div className='mess'>No Task Here</div>
                )
            }
        </div>
    )
}
