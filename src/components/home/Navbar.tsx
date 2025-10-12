import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="w-full p-7  shadow-2xl border-b-2 bg-foreground ">
      <div className="max-w-screen-xl px-6 flex justify-between items-center text-secondary">
        <h3 className="text-2xl font-bold">Task Wave </h3>
        <nav>
          <ul className=" flex space-x-6 ">
            <li>
              <a href="#">Signup</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">About TaskWave</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
