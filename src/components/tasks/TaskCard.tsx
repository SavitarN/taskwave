import React, { useEffect, useState } from "react";
import type { Task } from "../../types/task";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import clsx from "clsx";
import TaskModal from "../modal/TaskModal";

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const allTask = useSelector((state: RootState) => state.task);
  const [editTask, setEditTask] = useState<Task | null>(null);
  const [editTaskModal, setEditTaskModal] = useState(false);
  const editTaskFn = (id: string) => {
    const taskToEdit = allTask.find((elem) => elem.id === id) || null;
    setEditTask(taskToEdit);
    setEditTaskModal(true);
  };

  console.log("all task here ", allTask);
  return (
    <div className="bg-gray-200 rounded shadow border-2 border-red-400 w-full p-3 ">
      {editTaskModal && editTask && <TaskModal editTask={editTask} />}
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
          <button
            className="p-3 hover:underline  cursor-pointer"
            onClick={() => editTaskFn(task.id)}
          >
            Edit{" "}
          </button>
          <button className="p-3 hover:underline cursor-pointer">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
