import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      await axios.post('http://localhost:5000/api/tasks', { title, description });
      setTitle('');
      setDescription('');
      window.location.reload(); // Refresh to show new task
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md bg-dark-card p-6 rounded-lg shadow-lg mb-8 relative animate-glow">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="title">Task Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-accent"
          placeholder="Enter task title"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-accent"
          placeholder="Enter task description"
          rows="4"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-purple-accent text-white py-2 rounded hover:bg-purple-hover transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-accent/50"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;