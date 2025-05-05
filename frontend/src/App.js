import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-purple-accent mb-8">To-Do List</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;