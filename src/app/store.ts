import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import taskReducer from "../features/task/taskSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    task: taskReducer,
  },
});

let prevTaskState = store.getState().task;
store.subscribe(() => {
  const currentTaskState = store.getState().task;
  console.log("current TAsk state", currentTaskState);
  if (prevTaskState !== currentTaskState) {
    localStorage.setItem("taskData", JSON.stringify(currentTaskState));
    prevTaskState = currentTaskState;
  }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
