import { useState, useEffect } from "react";

const emptyForm = { title: "", status: "todo", priority: "medium" };
const STATUS_OPTIONS = ["todo", "in-progress", "done"];
const PRIORITY_OPTIONS = ["low", "medium", "high"];
export default function TaskForm({editingTask,onCreate,onUpdate,onCancelEdit}) {

  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");

  const isEditing = Boolean(editingTask);

  useEffect(() => {
    setForm(
      editingTask ?
        { title: editingTask.title, status: editingTask.status, priority: editingTask.priority }
        : emptyForm
    );
    setError("");
  }, [editingTask]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.title.trim()) {
      setError("give some title");
      return
    }

    const payload = { ...form, title: form.title.trim() };

    try {
      if (isEditing) {
        await onUpdate(editingTask.id, payload);
      } else {
        await onCreate(payload);
        setForm(emptyForm)
      }
      setError("")
    } catch (err){
      setError(err.message);
    }

  }

  

  return (
    <div className="flex justify-center m4 ">

      <form onSubmit={handleSubmit} >
        
        <input
          type="text"
          placeholder="Task title"
          value={ form.title}
          onChange={(e)=> setForm({...form,title:e.target.value})}
        />

        <select
          value={form.status}
          onChange={(e)=> setForm({...form,status:e.target.value})}
        >

          {STATUS_OPTIONS.map((s) => (
            <option key={s} value={s}>{ s}</option>
          ))}

        </select>


        <select
         value={form.priority}
          onChange={(e)=> setForm({...form,priority:e.target.value})}
        >

          {PRIORITY_OPTIONS.map((s) => (
            <option key={s} value={s}>{ s}</option>
          ))}

        </select>

        {error && <p >{ error}</p>}

        <button type="submit">Submit</button>

        {isEditing && (
          <button
            type="button"
            onClick={onCancelEdit}
          >cancel</button>
        )}

      </form>

    </div>
  )
  
}