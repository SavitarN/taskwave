import React, { useState } from "react";
import { signin } from "../utils/signin";
interface SigninPageProps {}

const SigninPage: React.FC<SigninPageProps> = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      username,
      email,
      password,
    };
    setUsername("");
    setEmail("");
    setPassword("");
    if (signin(data)) {
      alert("User Registered Successfully ");
    } else {
      alert("Error in registering User");
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
          placeholder="Enter Your Username"
          onChange={(e) => setUsername(e.target.value)}
          className="  px-10 py-3 rounded-md border-2 border-blue-950"
          value={username}
        />
        <input
          type="email"
          placeholder="Enter Your Mail"
          className="  px-10 py-3 rounded-md border-2 border-blue-950"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
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

export default SigninPage;
