import React from "react";

interface TaskModalProps {
  handleOpen: () => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ handleOpen }) => {
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
          />

          <textarea
            rows={5}
            cols={5}
            placeholder="Task Description"
            className=" w-full border border-green-300  px-7 py-5"
          />
          <div className="w-full flex justify-around">
            <div>
              <input
                type="radio"
                id="medium"
                name="priority"
                value="Medium"
                className="text-2xl text-red-600"
              />
              <label htmlFor="medium">Medium</label>
            </div>

            <div>
              <input type="radio" id="high" name="priority" value="High" />
              <label htmlFor="high">High</label>
            </div>

            <div>
              <input type="radio" id="low" name="priority" value="Low" />
              <label htmlFor="low">Low</label>
            </div>
          </div>

          <input
            type="date"
            className=" w-full border border-green-300  px-7 py-5"
          />

          <div className="w-full flex justify-around">
            <div>
              <input type="radio" id="done" name="status" value="Done" />
              <label htmlFor="done">Done</label>
            </div>

            <div>
              <input
                type="radio"
                id="in-progress"
                name="status"
                value="In Progress"
              />
              <label htmlFor="In Progress">In Progress</label>
            </div>

            <div>
              <input type="radio" id="todo" name="status" value="Todo" />
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
