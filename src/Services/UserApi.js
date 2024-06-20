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

export const postReview = (reviewData) => {
  return userInstance.post("/reviews/create", { ...reviewData });
};

export const AddToWishlist = (productId) => {
  return userInstance.post("/wishlist", { productId });
};

export const removeWishlist = (productId) => {
  return userInstance.post("/wishlist/remove", {productId});
}

export const addToCart = (productId, quantity) => {
  return userInstance.post("/cart/add", { productId, quantity });
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
  return userInstance
    .get("/auth/status")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching user status:", error);
      return { user: null };
    });
};

export const getProductDetails = (productId) => {
  return userInstance.get(`/product/${productId}`);
};

export const getUser = () => {
  return userInstance.get("/user");
};

export const getReviews = (productId) => {
  return userInstance.get(`/reviews/${productId}`);
};

export const checkProductInWishlist = (productId) => {
  return userInstance.get(`/wishlist/check/${productId}`);
};

export const getWishlist = () => {
  return userInstance.get("/wishlist");
};

export const getCart = () => {
  return userInstance.get("/cart");
}


//DELETE METHODS

export const removeFromWishlist = (productId) => {
  return userInstance.delete(`/wishlist/remove/${productId}`);
};