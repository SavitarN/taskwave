import React, { useState } from "react";
import type { Task } from "../../types/task";

interface TaskModalProps {
  handleOpen: () => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ handleOpen }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "",
    deadline: "",
    status: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target;
    setTask((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  console.log(task);

  const handleModal = () => {
    handleOpen();
  };
  return (
    <div className=" fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm ">
      <div>
        <button className="absolute left-200 top-0" onClick={handleModal}>
          Cross
        </button>
      </div>
      <div className="flex flex-col gap-2 p-5 md:p-7 xl:p-10 items-center bg-gray-200 ">
        <h2>Create Your Task</h2>
        <form className="flex flex-col gap-5 p-3 md:p-7 xl:p-12 w-full border border-red-400">
          <input
            type="text"
            placeholder="Task Title"
            className=" w-full border border-green-300  px-7 py-5"
            onChange={handleChange}
            name="title"
          />

          <textarea
            rows={5}
            cols={5}
            placeholder="Task Description"
            className=" w-full border border-green-300  px-7 py-5"
            onChange={handleChange}
            name="description"
          />
          <div className="w-full flex justify-around">
            <div>
              <input
                type="radio"
                id="medium"
                name="priority"
                value="Medium"
                className="text-2xl text-red-600"
                onChange={handleChange}
              />
              <label htmlFor="medium">Medium</label>
            </div>

            <div>
              <input
                type="radio"
                id="high"
                name="priority"
                value="High"
                onChange={handleChange}
              />
              <label htmlFor="high">High</label>
            </div>

            <div>
              <input
                type="radio"
                id="low"
                name="priority"
                value="Low"
                onChange={handleChange}
              />
              <label htmlFor="low">Low</label>
            </div>
          </div>

          <input
            type="date"
            name="deadline"
            onChange={handleChange}
            className=" w-full border border-green-300  px-7 py-5"
          />

          <div className="w-full flex justify-around">
            <div>
              <input
                type="radio"
                id="done"
                name="status"
                value="Done"
                onChange={handleChange}
              />
              <label htmlFor="done">Done</label>
            </div>

            <div>
              <input
                type="radio"
                id="in-progress"
                name="status"
                value="In Progress"
                onChange={handleChange}
              />
              <label htmlFor="In Progress">In Progress</label>
            </div>

            <div>
              <input
                type="radio"
                id="todo"
                name="status"
                value="Todo"
                onChange={handleChange}
              />
              <label htmlFor="todo"> Todo</label>
            </div>
          </div>
          <button className=" border-2 p-3">Add Task </button>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
