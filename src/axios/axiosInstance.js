import axios from "axios";

const userInstance = axios.create({
  baseURL: "https://mini-project-backend-nv1x.onrender.com/",
  // baseURL: "https://mini-project-backend-production.up.railway.app/",
});

const adminInstance = axios.create({
  baseURL: "https://mini-project-backend-nv1x.onrender.com/admin/",
  // baseURL: "https://mini-project-backend-production.up.railway.app/admin/",
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
