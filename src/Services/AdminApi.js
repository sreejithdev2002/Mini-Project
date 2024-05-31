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

export const getProductById = (productId) => {
    return adminInstance.get(`/products/${productId}`);
}

//PUT

export const updateProduct = (productId, value) => {
    return adminInstance.put(`/products/${productId}`, {...value});
}

export const disableProduct = (productId) => {
    return adminInstance.put(`/products/${productId}/disable`);
}