import React, { createContext, useState } from 'react'


export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {

    const [btnTyle, setBtnTyle] = useState('btn-add');
    const [editItem, setEditItem] = useState(null);
    const [locationItem, setLocationItem] = useState(null);
    const [tasks, setTasks] = useState([
        
        {title: "Read the book"},
        {title: "Take a shower"},
        {title: "Have a dinner"}
    ])

    const addTask = title =>{
     
        setTasks([...tasks, {title}])
    }

    const removeTask = index =>{
      
        tasks.splice(index , 1);
      
        setTasks([...tasks]);
    }

    const clearTasks =() =>{
       
        setTasks([]);
    }

    const findTask = (i) =>{
       
        const item = tasks.find( (task,index) => index === i );
        setBtnTyle('btn-update');
        setLocationItem(i);
        setEditItem(item);
    }

    const updateTask = (title,i) =>{

        const newTask = tasks.map((task,index)=> (index === i ? {title} : task));
        setBtnTyle('btn-add');
        setTasks(newTask);
        setEditItem(null);
    }
 
    return (

        <TaskListContext.Provider value={{tasks,locationItem, setLocationItem, setTasks, editItem, addTask, removeTask, clearTasks, findTask, updateTask, btnTyle}}>
            {props.children} 
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;