import React from "react";
import TaskContainer from "./TaskContainer";
import type { Task } from "../../types/task";
interface TaskListProps {
  todo?: Task[];
  inProgress?: Task[];
  done?: Task[];
}

const TaskList: React.FC<TaskListProps> = (props) => {
  return (
    <div className="flex flex-col justify-around">
      <div className="h-auto w-auto p-6"></div>
    </div>
  );
};

export default TaskList;
