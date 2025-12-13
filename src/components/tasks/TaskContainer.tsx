import React from "react";
import type { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import TaskList from "./TaskList";

interface TaskContainerProps {}

const TaskContainer: React.FC<TaskContainerProps> = (props) => {
  const task = useSelector((state: RootState) => state.task);

  const taskInProgress = task.filter((task) => task.status === "In-progress");
  const taskDone = task.filter((task) => task.status === "Done");
  const taskTodo = task.filter((task) => task.status === "Todo");
  return (
    <div className="min-h-screen flex flex-row justify-evenly">
      <TaskList task={taskTodo} status="To-do" />
      <TaskList task={taskInProgress} status="In Progress" />
      <TaskList task={taskDone} status="Done " />
    </div>
  );
};

export default TaskContainer;
