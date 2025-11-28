import React, { useState } from "react";
import img from "../../src/assets/task.png";
import TaskModal from "../components/modal/TaskModal";
interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const [modal, showModal] = useState(false);
  const handleOpen = () => {
    showModal((prev) => !prev);
  };
  return (
    <div className="min-h-screen flex  justify-between items-center">
      <div className="">
        <button
          className="px-10 py-8  border rounded-xl hover:cursor-pointer hover:animate-bounce"
          onClick={handleOpen}
        >
          Create Your Task{" "}
        </button>
      </div>
      <div>
        <img src={img} />
      </div>
      {modal && <TaskModal />}
    </div>
  );
};

export default Dashboard;
