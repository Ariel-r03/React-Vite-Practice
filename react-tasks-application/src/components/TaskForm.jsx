import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [Title, setTitle] = useState(null);
  const [Description, setDescription] = useState(null);
  const {createTask} = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title: Title, description: Description });
    e.target.reset();
  };
  return (
   <div className="max-w-md mx-auto">
     <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
      <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        className="bg-slate-300 p-3 w-full mb-2"
      ></input>

      <textarea
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        className="bg-slate-300 p-3 w-full mb-2"
      ></textarea>
      <button className="bg-indigo-500 px-3 py-1 text-white" type="submit">Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
