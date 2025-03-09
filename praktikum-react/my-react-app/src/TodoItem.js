// src/TodoItem.js
import React from "react";

function TodoItem({ task, onDelete }) {
  return (
    <li>
      {task}
      <button onClick={onDelete} style={{ marginLeft: "10px" }}>Hapus</button>
    </li>
  );
}

export default TodoItem;
