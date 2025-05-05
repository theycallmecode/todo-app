import React, { useState } from 'react';
import axios from 'axios';

const TaskItem = ({ task, setTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [completed, setCompleted] = useState(task.completed);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${task._id}`);
      setTasks((prevTasks) => prevTasks.filter((t) => t._id !== task._id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/tasks/${task._id}`, {
        title,
        description,
        completed,
      });
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t._id === task._id ? response.data : t))
      );
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const toggleComplete = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/tasks/${task._id}`, {
        ...task,
        completed: !completed,
      });
      setCompleted(!completed);
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t._id === task._id ? response.data : t))
      );
    } catch (error) {
      console.error('Error toggling task completion:', error);
    }
  };

  return (
    <div className="bg-dark-card p-4 rounded-lg shadow-lg mb-4">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 mb-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-accent"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 mb-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-accent"
            rows="3"
          ></textarea>
          <div className="flex justify-end space-x-2">
            <button
              onClick={handleUpdate}
              className="bg-purple-accent text-white px-4 py-2 rounded hover:bg-purple-hover transition"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={completed}
                onChange={toggleComplete}
                className="mr-2"
              />
              <h3 className={`text-lg font-semibold ${completed ? 'line-through text-gray-400' : ''}`}>
                {task.title}
              </h3>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-purple-accent text-white px-3 py-1 rounded hover:bg-purple-hover transition"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
          {task.description && (
            <p className={`mt-2 ${completed ? 'line-through text-gray-400' : 'text-gray-300'}`}>
              {task.description}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskItem;