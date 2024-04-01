import { userInstance } from "../axios/axiosInstance";

export const Signup = (value) => {
  return userInstance.post("/signup", { ...value });
};

export const login = (value) => {
  return userInstance.post("/login", {...value});
};
