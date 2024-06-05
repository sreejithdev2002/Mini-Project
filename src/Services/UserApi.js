import { userInstance } from "../axios/axiosInstance";

//POST METHODS

export const Signup = (value) => {
  return userInstance.post("/signup", { ...value });
};

export const login = (value) => {
  return userInstance.post("/login", { ...value });
};

export const createOrder = (orderData) => {
  return userInstance.post("/createorder", { ...orderData });
};

//GET METHODS

export const featuredProducts = () => {
  return userInstance.get("/");
};

export const latestArrivals = () => {
  return userInstance.get("/latestarrival");
};

export const mens = () => {
  return userInstance.get("/mens");
};

export const womens = () => {
  return userInstance.get("/womens");
};

export const casuals = () => {
  return userInstance.get("/categories/casuals");
};

export const formals = () => {
  return userInstance.get("/categories/formals");
};

export const sandals = () => {
  return userInstance.get("/categories/sandals");
};

export const sneakers = () => {
  return userInstance.get("/categories/sneakers");
};

export const luxury = () => {
  return userInstance.get("/luxury");
};

export const userStatus = () => {
  return userInstance.get("/auth/status");
};

export const getProductDetails = (productId) => {
  return userInstance.get(`/product/${productId}`);
};

export const getUser = () => {
  return userInstance.get("/user");
};
