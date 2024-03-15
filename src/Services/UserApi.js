import { userInstance } from "../axios/axiosInstance";

export const Signup = (value) => {
  return userInstance.post("/signup", { ...value });
};
