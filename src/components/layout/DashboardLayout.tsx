import React from "react";
import { Outlet } from "react-router";

interface DashoboardLayoutProps {}

const DashoboardLayout: React.FC<DashoboardLayoutProps> = (props) => {
  return (
    <div>
      DashoboardLayout works!
      <Outlet />
    </div>
  );
};

export default DashoboardLayout;
