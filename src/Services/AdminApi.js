import { adminInstance } from "../axios/axiosInstance";

export const login = (value) => {
    return adminInstance.post("/login", {...value});
};