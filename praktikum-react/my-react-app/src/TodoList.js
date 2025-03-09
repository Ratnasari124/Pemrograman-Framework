// src/TodoList.js
import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [tasks, setTasks] = useState([]); // State daftar tugas
  const [newTask, setNewTask] = useState(""); // State untuk input tugas baru

  // Tambah tugas baru
  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]); // Menambahkan tugas ke daftar
    setNewTask(""); // Reset input
  };

  // Hapus tugas berdasarkan indeksnya
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Tambahkan tugas..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Tambah</button>

      <ul>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} onDelete={() => deleteTask(index)} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
