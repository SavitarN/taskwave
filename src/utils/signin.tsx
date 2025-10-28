import type { User } from "../types/user";
type signin = (userData: User) => boolean;

export const signin: signin = (userData: User) => {
  try {
    const data = JSON.stringify(userData);
    localStorage.setItem("userdata", data);
    return true;
  } catch (error) {
    console.log("error ", error);
    return false;
  }
};
