import React, { useState } from "react";

import TaskModal from "../components/modal/TaskModal";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import Empty from "../components/dashboard/Empty";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const [modal, showModal] = useState(false);

  const allTask = useSelector((state: RootState) => state.task);

  console.log("allTask", allTask);
  const handleOpen = () => {
    showModal((prev) => !prev);
  };
  return (
  
    <div className="min-h-screen flex  justify-between items-center ">
 
 {
  allTask.length===0 ? <Empty onCreateTask={handleOpen}
  />
 }
      {modal && <TaskModal handleOpen={handleOpen} />}
    </div>
  );
};

export default Dashboard;
