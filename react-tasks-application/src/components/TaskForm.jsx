import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [Title, setTitle] = useState(null);
  const [Description, setDescription] = useState(null);
  const value = useContext(TaskContext);
  console.log(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    value.createTask({ title: Title, description: Description });
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>

      <textarea
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></textarea>
      <button type="submit">Guardar</button>
    </form>
  );
}

export default TaskForm;
