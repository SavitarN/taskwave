type user = {
  username: string;
  password: string;
};
type Login = (user: user) => boolean;

export const Login = (user: user) => {
  const { username, password } = user;
  const storedData = localStorage.getItem("userdata");
  if (storedData) {
    const user: user = JSON.parse(storedData);

    return user.username === username && user.password === password;
  } else {
    return false;
  }
};
