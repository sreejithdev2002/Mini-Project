import axios from "axios";

const apiBaseURL = import.meta.env.VITE_BASE_URL;

const userInstance = axios.create({
  baseURL: apiBaseURL,
});

const adminInstance = axios.create({
  baseURL: `${apiBaseURL}/admin/`,
});

userInstance.interceptors.request.use((request) => {
  const token = localStorage.getItem("jwt");
  request.headers.Authorization = `Bearer ${token}`;
  return request;
});

adminInstance.interceptors.request.use((request) => {
  const token = localStorage.getItem("adminjwt");
  request.headers.Authorization = `Bearer ${token}`;
  return request;
});

export { userInstance, adminInstance };
