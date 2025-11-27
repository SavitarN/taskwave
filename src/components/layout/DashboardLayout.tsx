import React from "react";
import { Outlet } from "react-router";

interface DashoboardLayoutProps {}

const DashoboardLayout: React.FC<DashoboardLayoutProps> = (props) => {
  return (
    <div className="min-h-screen p-5 md:p-10 xl:p-12 bg-blue-400 ">
      <div className="bg-red-400 border-2 "></div>
      <Outlet />
    </div>
  );
};

export default DashoboardLayout;
