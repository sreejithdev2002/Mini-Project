import axios from "axios";

const userInstance = axios.create({
  // baseURL: "http://localhost:8000/"
  baseURL: "https://mini-project-backend-nv1x.onrender.com",
});

const adminInstance = axios.create({
    // baseURL: "http://localhost:8000/admin/"
  baseURL: "https://mini-project-backend-nv1x.onrender.com/admin/",
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
