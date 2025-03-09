import {useState} from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import './App.css'

export default function App() {
  const [tasks, setTasks] = useState([])
  const [taskName, setTaskName] = useState('')

  // Function to add a task
  const addTask = () => {
    if (taskName.trim() === '') return
    const newTask = {id: Date.now(), name: taskName, completed: false}
    setTasks([...tasks, newTask])
    setTaskName('')
  }

  // Function to delete a task
  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Function to toggle task completion
  const toggleTaskCompletion = id => {
    setTasks(
      tasks.map(task =>
        task.id === id ? {...task, completed: !task.completed} : task,
      ),
    )
  }

  return (
    <div className="app-container">
      <h1>Task Tracker App</h1>
      <TaskInput
        taskName={taskName}
        setTaskName={setTaskName}
        addTask={addTask}
      />
      <TaskList
        tasks={tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
    </div>
  )
}
