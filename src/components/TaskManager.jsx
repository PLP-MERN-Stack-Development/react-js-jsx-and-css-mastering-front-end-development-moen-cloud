import { useState } from "react";

const TaskManager = ({ postTasks }) => {
  const [tasks, setTasks] = useState(postTasks || []);
  const [taskInput, setTaskInput] = useState("");
  const [filter, setFilter] = useState("All");

  const addTask = () => {
    if (!taskInput) return;
    setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
    setTaskInput("");
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(t =>
    filter === "All" ? true : filter === "Active" ? !t.completed : t.completed
  );

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow-md">
      <h2 className="text-2xl mb-4 dark:text-white">Tasks for this Post</h2>

      {/* Add Task */}
      <div className="flex mb-4">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add new task..."
          className="border p-2 flex-grow mr-2 dark:bg-gray-700 dark:text-white"
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 rounded">Add</button>
      </div>

      {/* Filters */}
      <div className="mb-4">
        <button onClick={() => setFilter("All")} className="mr-2">All</button>
        <button onClick={() => setFilter("Active")} className="mr-2">Active</button>
        <button onClick={() => setFilter("Completed")}>Completed</button>
      </div>

      {/* Task List */}
      <ul>
        {filteredTasks.map((t) => (
          <li key={t.id} className="flex justify-between items-center mb-2 dark:text-white">
            <span className={t.completed ? "line-through" : ""}>{t.text}</span>
            <div>
              <button onClick={() => toggleComplete(t.id)} className="mr-2">
                {t.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => deleteTask(t.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
