import './index.css'

export default function TaskInput({taskName, setTaskName, addTask}) {
  return (
    <div className="input-container">
      <input
        type="text"
        value={taskName}
        onChange={e => setTaskName(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="button" onClick={addTask}>
        Add Task
      </button>
    </div>
  )
}
