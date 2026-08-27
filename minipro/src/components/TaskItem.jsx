export default function TaskItem({task, onEdit , onDelete}) {
  
  return (
    <li className="bg-white border border-state-200 rounded-lg flex items-center">
      <p className="mr-20">{task.title}</p>
      <p className="mr-10">{task.status }</p>
      <p className="mr-10">{task.priority}</p>
      <br></br>
      <button
        className="p-2 text-slate-400  rounded-md bg-orange-300 "
      onClick={()=>onEdit(task)}
      >edit</button>
      <button
        className="p-2 text-slate-400  rounded-md bg-red-300 mr-5"
      onClick={()=> onDelete(task.id)}
      >delete</button>
      <br></br>
      <br></br>
    
    </li>
  )

}