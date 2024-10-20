import React, { useState } from 'react';
import Task from '../Task/Task';
import { TextField, Button } from '@mui/material';
import tasksData from './tasksData';
import './TasksList.css';

const TasksList = () => {

    const [tasks, setTasks] = useState(tasksData);
    const [newTask, setNewTask] = useState({ description: '', startDate: '', endDate: '', status: 'PENDING' });
    const [searchQuery, setSearchQuery] = useState('');

    const filteredTasks = tasks.filter(task => 
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const addTask = () => {
        setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
        setNewTask({ description: '', startDate: '', endDate: '', status: 'PENDING' });
    };

    const updateTask = (updatedTask) => {
        setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    };

    return (
        <div className="tasks-list-container">
            <h2 className="tasks-list-title">Task List</h2>
            
            <TextField
                placeholder="Search by task name"
                onChange={(e) => setSearchQuery(e.target.value)}
                className="add-task-field"
                fullWidth
                style={{ marginBottom: '20px' }}
            />

            <div className="tasks-header">
                <span className="header-item">Description</span>
                <span className="header-item">Start Date</span>
                <span className="header-item">End Date</span>
                <span className="header-item">Status</span>
                <span className="header-item">Actions</span>
            </div>

            {filteredTasks.map((task) => (
                <Task key={task.id} task={task} onUpdate={updateTask} />
            ))}

            <div className="add-task-section">
                <TextField
                    label="Description"
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                    className="add-task-field"
                    style={{ marginBottom: '10px' }}
                />
                <TextField
                    type="date"
                    value={newTask.startDate}
                    onChange={(e) => setNewTask({ ...newTask, startDate: e.target.value })}
                    className="add-task-field"
                    style={{ marginBottom: '10px' }}
                />
                <TextField
                    type="date"
                    value={newTask.endDate}
                    onChange={(e) => setNewTask({ ...newTask, endDate: e.target.value })}
                    className="add-task-field"
                    style={{ marginBottom: '10px' }}
                />
                <Button onClick={addTask} variant="contained" color="primary">Add Task</Button>
            </div>
        </div>
    );
};

export default TasksList;