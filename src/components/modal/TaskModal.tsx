import React, { useState } from "react";
import type { Task } from "../../types/task";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../app/store";
import { addTask } from "../../features/task/taskSlice";
interface TaskModalProps {
  handleOpen?: () => void;
  editTask?: Task;
}

const TaskModal: React.FC<TaskModalProps> = ({ handleOpen, editTask }) => {
  const [task, setTask] = useState<Task>(
    editTask || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      priority: "Medium",
      deadline: "",
      status: "Todo",
    }
  );
  const dispatch = useDispatch<AppDispatch>();
  console.log("edit task prop her ", editTask);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTask((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleModal = () => {
    handleOpen();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTask(task));
    handleOpen();
  };
  return (
    <div className=" fixed inset-0 z-70 flex justify-center items-center bg-black/40 backdrop-blur-sm ">
      <div className="absolute left-200 top-5  border-2 cursor-pointer">
        <button onClick={handleModal}>X</button>
      </div>
      <div className=" flex flex-col items-center justify-center bg-gray-200 rounded-2xl ">
        <h2>Create Your Task</h2>
        <form
          className="flex flex-col gap-1 p-2 md:p-7 xl:p-12 w-full "
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Task Title"
            className=" w-full border border-green-300  px-7 py-5"
            onChange={handleChange}
            name="title"
            value={task.title}
          />

          <textarea
            rows={5}
            cols={5}
            placeholder="Task Description"
            className=" w-full border border-green-300  px-7 py-5"
            onChange={handleChange}
            name="description"
            value={task.description}
          />

          <fieldset className="w-full flex justify-around">
            <legend> Priority</legend>
            <div>
              <input
                type="radio"
                id="medium"
                name="priority"
                value="Medium"
                className="text-2xl text-red-600"
                onChange={handleChange}
                checked={task.priority === "Medium"}
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
                checked={task.priority === "High"}
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
                checked={task.priority === "Low"}
              />
              <label htmlFor="low">Low</label>
            </div>
          </fieldset>

          <input
            type="date"
            name="deadline"
            onChange={handleChange}
            className=" w-full border border-green-300  px-7 py-5"
            value={task.deadline}
          />

          <fieldset className="w-full flex justify-around">
            <legend>Status</legend>
            <div>
              <input
                type="radio"
                id="done"
                name="status"
                value="Done"
                checked={task.status === "Done"}
                onChange={handleChange}
              />
              <label htmlFor="done">Done</label>
            </div>

            <div>
              <input
                type="radio"
                id="in-progress"
                name="status"
                value="In-progress"
                checked={task.status === "In-progress"}
                onChange={handleChange}
              />
              <label htmlFor="In-progress">In Progress</label>
            </div>

            <div>
              <input
                type="radio"
                id="todo"
                name="status"
                value="Todo"
                onChange={handleChange}
                checked={task.status == "Todo"}
              />
              <label htmlFor="todo"> Todo</label>
            </div>
          </fieldset>
          <button className=" border-2 p-3">Add Task </button>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
