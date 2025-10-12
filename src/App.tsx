import React from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
};

export default App;
