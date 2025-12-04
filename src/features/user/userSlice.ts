import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  username: string;
  email: string;
};
const initialState: UserState = {
  username: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    clearUser: (state) => {
      state.username = "";
      state.email = "";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
