import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div className="w-full max-w-md">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-400">No tasks yet. Add one above!</p>
      ) : (
        tasks.map((task) => <TaskItem key={task._id} task={task} setTasks={setTasks} />)
      )}
    </div>
  );
};

export default TaskList;