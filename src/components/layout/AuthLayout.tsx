import React from "react";
import { Outlet } from "react-router";

interface AuthLayoutProps {}

const AuthLayout: React.FC<AuthLayoutProps> = (props) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
