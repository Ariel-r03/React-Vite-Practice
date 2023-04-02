import React, { useState } from "react";
import App from "../App";

function TaskForm({ createTask }) {
  const [Title, setTitle] = useState(null);
  const [Description, setDescription] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title: Title, description: Description });
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
