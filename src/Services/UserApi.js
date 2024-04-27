import { userInstance } from "../axios/axiosInstance";


//POST METHODS

export const Signup = (value) => {
  return userInstance.post("/signup", { ...value });
};

export const login = (value) => {
  return userInstance.post("/login", {...value});
};



//GET METHODS

export const latestArrivals = () => {
  return userInstance.get("/latestarrival");
};