type user = {
  username: string;
  email: string;
  password: any;
};
type signin = (userData: user) => boolean;

export const signin: signin = (userData: user) => {
  try {
    const data = JSON.stringify(userData);
    localStorage.setItem("userdata", data);
    return true;
  } catch (error) {
    console.log("error ", error);
    return false;
  }
};
