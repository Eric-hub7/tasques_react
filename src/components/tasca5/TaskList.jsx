import React, { useState } from 'react';
import TaskItem from './TaskItem';

function TaskList() {
  const [tasques, setTasques] = useState([
    { taskName: 'Fer la compra', completed: false },
    { taskName: 'Netejar la casa', completed: true },
    { taskName: 'Acabar el projecte', completed: false },
  ]);

  return (
    <div>
      <h2>Llista de Tasques</h2>
      {tasques.map((tasca, index) => (
        <TaskItem 
          key={index} 
          taskName={tasca.taskName} 
          completed={tasca.completed} 
        />
      ))}
    </div>
  );
}

export default TaskList;