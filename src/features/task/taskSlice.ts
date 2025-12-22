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
    updateTask: (state, action: PayloadAction<Task>) => {
      const editTaskIndex = state.findIndex((t) => t.id === action.payload.id);
      console.log("edit task index", editTaskIndex);
      if (editTaskIndex != -1) {
        state[editTaskIndex] = action.payload;
      }
    },
  },
});

export const { addTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
