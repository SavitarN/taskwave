import React from "react";
import type { Task } from "../../types/task";
import clsx from "clsx";
interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="bg-gray-200 rounded shadow border-2 border-red-400 w-full p-3 ">
      <div className="flex flex-col gap-2">
        <h2>Task: {task.title}</h2>
        {task.description && <p>Description: {task.description}</p>}
        <div
          className={clsx(
            "rounded-full w-2 h-2",
            task.priority === "Low" && "bg-green-700",
            task.priority === "Medium" && "bg-amber-600",
            task.priority === "High" && "bg-red-700"
          )}
        ></div>
        <div className="w-full flex justify-center p-2  ">
          <button className="p-3  cursor-pointer">Edit </button>
          <button className="p-3  cursor-pointer">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
