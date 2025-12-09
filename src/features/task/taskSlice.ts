import { createSlice } from "@reduxjs/toolkit";
import type { Task } from "../../types/task";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: Task[] = [];
const taskSlice = createSlice({
  name: "task",
  initialState,

  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
