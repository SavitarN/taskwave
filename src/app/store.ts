import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import taskReducer from "../features/task/taskSlice";

const savedTask = localStorage.getItem("taskData");

const preloadedState = { task: savedTask ? JSON.parse(savedTask) : undefined };
console.log("preloadedState", preloadedState);
export const store = configureStore({
  reducer: {
    user: userReducer,
    task: taskReducer,
  },
  preloadedState,
});

let prevTaskState = store.getState().task;
store.subscribe(() => {
  const currentTaskState = store.getState().task;

  if (prevTaskState !== currentTaskState) {
    localStorage.setItem("taskData", JSON.stringify(currentTaskState));
    prevTaskState = currentTaskState;
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
