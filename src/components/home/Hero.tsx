import React from "react";
import { Button } from "../ui/button";
import image from "../../assets/task.jpg";
const Hero: React.FC = () => {
  return (
    <div className=" min-h-screen flex justify-center items-center">
      <div className="p-10  flex flex-col  gap-10 justify-center items-center">
        <div className="p-5 spac-y-1">
          <h1 className="text-primary font-bold text-4xl text-center mb-2">
            Task Wave
          </h1>
          <p className="text-foreground">
            Your all in one project management tool
          </p>
        </div>

        <Button className="bg-primary text-primary-foreground p-6">
          Get Started{" "}
        </Button>
      </div>

      <div className="flex justify-center items-center w-[500px] h-[400px] shadow-2xl border-2 rounded-md">
        <img
          src={image}
          alt="Task Preview Image"
          className="w-full h-full object-fill"
        />
      </div>
    </div>
  );
};

export default Hero;
