import React from 'react'

import '../style/app.css'

import TaskListContextProvider from '../context/TastListContext'

import { TaskList } from './TaskList'
import TaskForm from './TaskForm'
import Header from './Header'

const App = () => {
    return (
      
      <TaskListContextProvider>

        <div className='container'>
          <div className="app-wrapper">
            <div className="main">
              <Header></Header>
              <TaskForm></TaskForm>
              <TaskList></TaskList>  
            </div>
          </div>
        </div>

      </TaskListContextProvider>
  
    )
}

export default App;
