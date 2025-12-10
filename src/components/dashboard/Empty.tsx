import React from "react";
import img from "../../src/assets/task.png";
interface EmptyProps {
  onCreateTask: () => void;
}

const Empty: React.FC<EmptyProps> = ({ onCreateTask }) => {
  return (
    <div>
      <div className="">
        <button
          className="px-10 py-8  border rounded-xl hover:cursor-pointer hover:animate-bounce"
          onClick={onCreateTask}
        >
          Create Your Task{" "}
        </button>
      </div>
      <div>
        <img src={img} />
      </div>
    </div>
  );
};

export default Empty;
