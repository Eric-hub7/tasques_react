import React from 'react';

function TaskItem({ taskName, completed }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <input 
        type="checkbox" 
        checked={completed} 
        readOnly 
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {taskName}
      </span>
    </div>
  );
}

export default TaskItem;