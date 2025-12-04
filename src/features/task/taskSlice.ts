import { createSlice } from "@reduxjs/toolkit";
import type { Task } from "../../types/task";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: Task = {
  id: "",
  title: "",
  description: "",
  priority: "medium",
  deadline: "",
  status: "in-progress",
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  addTask: (state, action: payloadAction<Task>) => {},
});
