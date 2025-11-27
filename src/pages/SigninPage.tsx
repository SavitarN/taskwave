import React, { useState } from "react";
import { signin } from "../utils/signin";
import type { User } from "../types/user";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../app/store";
import { setUser } from "../features/user/userSlice";
const SigninPage: React.FC = () => {
  const [userData, setUserData] = useState<User>({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (signin(userData)) {
      alert("User Registered Successfully ");
      setUserData({
        username: "",
        email: "",
        password: "",
      });
      dispatch(setUser(userData));
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
          name="username"
          placeholder="Enter Your Username"
          onChange={handleChange}
          className="  px-10 py-3 rounded-md border-2 border-blue-950"
          value={userData.username}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Mail"
          className="  px-10 py-3 rounded-md border-2 border-blue-950"
          onChange={handleChange}
          value={userData.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Your password"
          className="  px-10 py-3 rounded-md border-2 border-blue-950"
          onChange={handleChange}
          value={userData.password}
        />
        <button
          className="cursor-pointer px-10 border-primary border-2 w-fit m-auto rounded-md p-2 hover:animate-in "
          type="submit"
        >
          Submit
        </button>
      </form>
      <p>{user && user.username}</p>
    </div>
  );
};

export default SigninPage;
