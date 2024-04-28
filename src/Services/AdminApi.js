import { adminInstance } from "../axios/axiosInstance";

//POST METHODS

export const login = (value) => {
    return adminInstance.post("/login", {...value});
};

export const Products = (value) => {
    return adminInstance.post("/add", {...value});
}

//GET METHODS

export const userList = () => {
    return adminInstance.get("/");
};

export const viewProducts = () => {
    return adminInstance.get("/view");
};