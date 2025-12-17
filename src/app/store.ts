import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import taskReducer from "../features/task/taskSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    task: taskReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("taskData", JSON.stringify(state.task));
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
