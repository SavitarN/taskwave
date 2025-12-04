import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import reducer from "../features/user/userSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
console.log(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
