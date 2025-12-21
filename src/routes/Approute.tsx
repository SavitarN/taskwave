import { Routes, Route } from "react-router";

import Layout from "../components/layout/MainLayout";
import HomePage from "../pages/HomePage";
import AuthLayout from "../components/layout/AuthLayout";
import SigninPage from "../pages/SigninPage";

import LoginPage from "../pages/LoginPage";

import DashoboardLayout from "../components/layout/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import TaskModal from "../components/modal/TaskModal";
const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<h1>This is about us page</h1>} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/signup" element={<SigninPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route element={<DashoboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/taskmodal" element={<TaskModal />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
