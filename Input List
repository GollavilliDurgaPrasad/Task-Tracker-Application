export default function TaskList({tasks, toggleTaskCompletion, deleteTask}) {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id} className="task-item">
          <span
            role="button"
            tabIndex="0"
            onClick={() => toggleTaskCompletion(task.id)}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                toggleTaskCompletion(task.id)
              }
            }}
            className={`task-name ${task.completed ? 'completed' : ''}`}
          >
            {task.name}
          </span>
          <button
            type="button"
            onClick={() => deleteTask(task.id)}
            className="delete-button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}
