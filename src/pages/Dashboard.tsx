import React, { useState } from "react";

import TaskModal from "../components/modal/TaskModal";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import Empty from "../components/dashboard/Empty";
import TaskContainer from "../components/tasks/TaskContainer";
interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const [modal, showModal] = useState(false);

  const allTask = useSelector((state: RootState) => state.task);

  console.log("allTask", allTask.length);
  const handleOpen = () => {
    showModal((prev) => !prev);
  };
  return (
    <div className="min-h-screen ">
      {allTask.length === 0 ? (
        <Empty onCreateTask={handleOpen} />
      ) : (
        <TaskContainer />
      )}
      {modal && <TaskModal handleOpen={handleOpen} />}
    </div>
  );
};

export default Dashboard;
