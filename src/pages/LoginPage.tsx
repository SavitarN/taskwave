import React, { useState } from "react";
import { Login } from "../utils/Login";
import { useNavigate } from "react-router";

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const data = { username, password };
    const result = Login(data);
    if (result) {
      navigate("/dashboard");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-10 md:p-7 xl:p-5 min-h-screen">
      <h3 className="text-primary text-2xl font-bold">Signin Here</h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-6 md:p-4 xl:p-2  gap-10"
      >
        <input
          type="text"
          name="username"
          placeholder="Enter Your Username"
          onChange={(e) => setUsername(e.target.value)}
          className="  px-10 py-3 rounded-md border-2 border-blue-950"
          value={username}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Your password"
          className="  px-10 py-3 rounded-md border-2 border-blue-950"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          className="cursor-pointer px-10 border-primary border-2 w-fit m-auto rounded-md p-2 hover:animate-in "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
