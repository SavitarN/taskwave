import React from "react";

interface TaskModalProps {}

const TaskModal: React.FC<TaskModalProps> = (props) => {
  return (
    <div className="inset top-0 left-0 flex justify-center">
      <div className="flex flex-col gap-2 p-5 md:p-7 xl:p-10">
        <h2>Create Your Task</h2>
        <form className="flex flex-col gap-2 ">
          <div className=" px-5 ">
            <input
              type="text"
              placeholder="Task Title"
              className="border-none w-full "
            />
          </div>

          <div className="w-full px-10 border-2">
            <textarea rows={10} cols={10} placeholder="Task Description" />
          </div>

          <div className="w-full px-10 border-2">
            <label for="medium">
              <input type="radio" id="medium" name="priority" value="Medium" />
            </label>

            <label for="high">
              <input type="radio" id="high" name="priority" value="High" />
            </label>

            <label for="low">
              <input type="radio" id="low" name="priority" value="Low" />
            </label>
          </div>

          <div>
            <input type="date" />
          </div>

          <div>
            <input type="radio" id="done" name="status" value="Done" />
            <input
              type="radio"
              id="in-progress"
              name="status"
              value="In Progress"
            />
            <input type="radio" id="todo" name="status" value="Todo" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
