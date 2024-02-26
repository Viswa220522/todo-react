// TaskItem.js
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const TaskItem = ({ task, deleteTask, toggleCompletion, editTask }) => {
  return (
    <div className="task-item d-flex align-items-center justify-content-between py-2">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleCompletion(task.id)}
          style={{ marginRight: '10px' }}
        />
        <span className={`task-text ${task.completed ? 'text-decoration-line-through text-success' : ''}`}>
          {task.text}
        </span>
      </div>
      <div>
        <FaEdit
          className="edit-icon text-primary me-2"
          onClick={() => {
            const newText = prompt('Edit task:', task.text);
            if (newText !== null) {
              editTask(task.id, newText);
            }
          }}
        />
        <FaTrash
          className="delete-icon text-danger"
          onClick={() => deleteTask(task.id)}
        />
      </div>
    </div>
  );
};

export default TaskItem;
