// TodoList.js
import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import './TodoList.css'; // Import CSS file

const TodoList = () => {
  // State for tasks
  const [tasks, setTasks] = useState([]);
  // State for input value
  const [taskInput, setTaskInput] = useState('');

  // Function to add a task
  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Function to toggle completion of a task
  const toggleCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Function to edit a task
  const editTask = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  // Load tasks from local storage on initial render
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to local storage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button className="btn btn-primary" type="button" onClick={addTask}>Add</button>
      </div>
      <div className="list-group">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompletion={toggleCompletion}
            editTask={editTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
