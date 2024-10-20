import React, { useState } from 'react';
import { TextField, Select, MenuItem, Button, IconButton } from '@mui/material';
import { CalendarToday } from '@mui/icons-material';
import './Task.css';

export default function Task ({ task, onUpdate }) {

    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task);

    const handleEdit = () => setIsEditing(true);
    
    const handleSave = () => {
        setIsEditing(false);
        onUpdate(editedTask);
    };

    return (
        <div className={`task-container ${task.status === 'COMPLETE' ? 'complete' : ''}`}>
            {isEditing ? (
                <>
                    <TextField
                        label="Description"
                        value={editedTask.description}
                        onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
                        className="task-item"
                    />
                    <IconButton className="task-button">
                        <CalendarToday />
                    </IconButton>
                    <TextField
                        type="date"
                        value={editedTask.startDate}
                        onChange={(e) => setEditedTask({ ...editedTask, startDate: e.target.value })}
                        className="task-item"
                    />
                    <IconButton className="task-button">
                        <CalendarToday />
                    </IconButton>
                    <TextField
                        type="date"
                        value={editedTask.endDate}
                        onChange={(e) => setEditedTask({ ...editedTask, endDate: e.target.value })}
                        className="task-item"
                    />
                    <Select
                        value={editedTask.status}
                        onChange={(e) => setEditedTask({ ...editedTask, status: e.target.value })}
                        className="task-item"
                    >
                        <MenuItem value="PENDING">Pending</MenuItem>
                        <MenuItem value="IN_PROGRESS">In Progress</MenuItem>
                        <MenuItem value="COMPLETE">Complete</MenuItem>
                    </Select>
                    <Button onClick={handleSave} className="task-button">Save</Button>
                </>
            ) : (
                <>
                    <span className="task-item">{task.description}</span>
                    <span className="task-item">{task.startDate}</span>
                    <span className="task-item">{task.endDate}</span>
                    <span className="task-item">{task.status}</span>
                    <Button onClick={handleEdit} className="task-button">Edit</Button>
                </>
            )}
        </div>
    );
};