import React from "react";
import TaskContainer from "./TaskContainer";
import type { Task } from "../../types/task";
import TaskCard from "./TaskCard";
interface TaskListProps {
  task: Task[];
  status: "Todo" | "Inprogress" | "Done";
}

const TaskList: React.FC<TaskListProps> = ({ task, status }) => {
  return (
    <div className="flex flex-col w-1/3 p-2">
      <h2>{status}</h2>
      {task.map((task) => (
        <TaskCard task={task} />
      ))}
    </div>
  );
};

export default TaskList;
