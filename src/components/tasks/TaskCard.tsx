import React from "react";
import type { Task } from "../../types/task";
interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="bg-gray-200 rounded shadow">
      <div>
        <h2>{task.title}</h2>
        {task.description && <p>{task.description}</p>}
      </div>
    </div>
  );
};

export default TaskCard;
