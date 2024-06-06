import { adminInstance } from "../axios/axiosInstance";

//POST METHODS

export const login = (value) => {
  return adminInstance.post("/login", { ...value });
};

export const Products = (formData) => {
  return adminInstance.post("/add", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

//GET METHODS

export const userList = () => {
  return adminInstance.get("/");
};

export const viewProducts = () => {
  return adminInstance.get("/view");
};

export const getProductById = (id) => {
  return adminInstance.get(`/products/${id}`);
};

export const getAllOrders = () => {
  return adminInstance.get("/orders");
};

//PUT



export const disableProduct = (productId) => {
  return adminInstance.put(`/products/${productId}/disable`);
};

export const blockUser = (userId) => {
  return adminInstance.put(`/users/${userId}/block`);
};

export const updateProduct = (id, productData) => {
  return adminInstance.put(`/products/${id}`, productData);
};

//DELETE

export const deleteProduct = (productId) => {
  return adminInstance.delete(`/products/${productId}/delete`);
};

export const deleteOrder = (orderId) => {
  return adminInstance.delete(`/orders/${orderId}/delete`);
}