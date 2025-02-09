import React, { useState } from "react";

const TodoList = ({ initialTasks }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("Moyenne");
  const [search, setSearch] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { name: newTask, priority, completed: false }]);
    setNewTask("");
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(search.toLowerCase())
  );

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Todo List avec Priorités</h2>
      <input
        type="text"
        placeholder="Rechercher une tâche"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {filteredTasks.map((task, index) => (
          <div
            key={index}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              background: task.completed ? "#c8e6c9" : "#f9f9f9",
              padding: "5px",
              margin: "5px 0",
            }}
          >
            {task.name} - <strong>{task.priority}</strong>
            <button onClick={() => toggleTaskCompletion(index)}>
              {task.completed ? "Non terminé" : "Terminé"}
            </button>
            <button onClick={() => deleteTask(index)}>Supprimer</button>
          </div>
        ))}
      </div>
      <p>Total des tâches : {tasks.length}</p>
      <p>Tâches terminées : {completedCount}</p>
      <input
        type="text"
        placeholder="Nom de la tâche"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Haute">Haute</option>
        <option value="Moyenne">Moyenne</option>
        <option value="Basse">Basse</option>
      </select>
      <button onClick={addTask}>Ajouter</button>
    </div>
  );
};

export default TodoList;
