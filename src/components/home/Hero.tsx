import React from "react";
import { Button } from "../ui/button";

const Hero: React.FC = () => {
  return (
    <div className="bg-card ">
      <h2 className="text-primary">Task Wave</h2>
      <Button className="bg-primary text-primary-foreground ">
        Get Started{" "}
      </Button>
    </div>
  );
};

export default Hero;
