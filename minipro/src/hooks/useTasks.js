import { useState, useEffect, useCallback } from "react";
import taskService from '../api/taskService'

export default function useTasks() {
  
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  const fetchTasks = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const data = await taskService.getAll();
      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }

  }, []);


  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);


  const createTask = async (task) => {
    const created = await taskService.create(task);
    setTasks((prev) => [created, ...prev]);

  };

  const updateTask = async (id,task) => {
    const updated = await taskService.update(id,task);
    setTasks((prev) => prev.map((t)=>(t.id === id ?updated:t)));
  };

  const deleteTask = async (id) => {
    await taskService.delete(id);
    setTasks((prev) => prev.filter((t)=> t.id !== id));

  };

  return {
    tasks,
    loading,
    error,
    refetch: fetchTasks,
    createTask,
    updateTask,
    deleteTask
  };

}