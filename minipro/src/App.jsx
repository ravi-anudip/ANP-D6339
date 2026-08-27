import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import SearchBar from './components/SearchBar'
import { useState,useMemo } from 'react';
import useTasks from './hooks/useTasks';
export default function App() {
  
  const [editingTask, setEditingTask] = useState(null);
  const [query, setQuery] = useState("");
  const { tasks, loading, error, createTask, updateTask, deleteTask } = useTasks();

  const filteredTasks = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return tasks;
    return tasks.filter((task) => task.title.toLowerCase().includes(q));
  }, [tasks, query]);


  async function handleDelete(id) {
    await deleteTask(id);
    if (editingTask?.id === id) setEditingTask(null);
  }

  async function handelUpdate(id , payload) {
    
    await updateTask(id, payload);
    setEditingTask(null);

  }


  return (
    <>
      <TaskForm
      
        editingTask = {editingTask}
        onCreate={createTask}
        onUpdate={handelUpdate}
        onCancelEdit={()=> setEditingTask(null)}
      />

      <SearchBar value={query} onChange={setQuery} />

      <TaskList
        tasks={ filteredTasks}
        loading={loading}
        error={error}
        onEdit={setEditingTask}
        onDelete={handleDelete}
      />


    </>
  );
}

