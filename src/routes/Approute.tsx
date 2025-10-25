import { Routes, Route } from "react-router";

import Layout from "../components/layout/Layout";
import HomePage from "../pages/HomePage";
import AuthLayout from "../components/layout/AuthLayout";
import SigninPage from "../pages/SigninPage";
const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<h1>This is about us page</h1>} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/signup" element={<SigninPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
