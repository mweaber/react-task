import React, { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor\'s Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Meeting',
      day: 'Feb 8th at 3:30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Get Groceries',
      day: 'Feb 6th at 12:30pm',
      reminder: false
    }
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header title='Task Tracker' />
      {tasks.length > 0  ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
