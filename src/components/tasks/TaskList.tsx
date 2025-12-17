import React from "react";
import type { Task } from "../../types/task";
import TaskCard from "./TaskCard";
interface TaskListProps {
  task: Task[];
  status: "Todo" | "Inprogress" | "Done";
}

const TaskList: React.FC<TaskListProps> = ({ task, status }) => {
  return (
    <div className="flex flex-col items-center p-3 gap-2">
      <h2>{status}</h2>
      {task.map((task) => (
        <TaskCard task={task} />
      ))}
    </div>
  );
};

export default TaskList;
