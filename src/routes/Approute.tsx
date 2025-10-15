import { Routes, Route } from "react-router";

import Layout from "../components/layout/Layout";
import HomePage from "../pages/HomePage";
const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<h1>This is about us page</h1>} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
