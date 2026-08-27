import TaskItem from "./TaskItem"

export default function TaskList({tasks , loading , error,onEdit,onDelete}) {

  if (loading) {
    return <p>Loading Tasks....</p>
  }

  if (error) {
    return (
      <>
        <p>{ error}</p>
      </>
    )
  }

  if (tasks.length === 0) {
    return <p>task not found.</p>
  }

  return (
    <>
      <ul>
        
        {
          tasks.map((task) => (
            <TaskItem key = {task.id} task={task} onEdit={onEdit} onDelete={onDelete} ></TaskItem>
          ))
        }

      </ul>
    </>
  )
}