import React, { useEffect, useState } from "react";
import { addToCart, getWishlist, removeFromWishlist } from "../../../Services/UserApi";
import "./Wishlist.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const [wishlistData, setWishlistData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchWishlist = async () => {
    try {
      const response = await getWishlist();
      setWishlistData(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch wishlist");
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      await addToCart(productId);
      toast.success("Product added to cart");
    } catch (error) {
      console.error("Failed to add product to cart", error);
      toast.error("Failed to add product to cart");
    }
  };

  const handleRemoveFromWishlist = async(productId) => {
    try{
        await removeFromWishlist(productId);
        toast.success("Product removed from wishlist");
        setWishlistData(wishlistData.filter(item => item._id !== productId));
    } catch(error){
        console.error("Failed to remove product from wishlist", error);
        toast.error("Failed to remove product from wishlist");
    }
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="wishlist">
      <div className="wishlistHeading">
        <h1>My Wishlist</h1>
      </div>
      {wishlistData.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <table className="wishTable">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {wishlistData.map((item) => (
              <tr key={item._id}>
                <td>
                  <img
                    src={`http://localhost:8000/public/images/products/${item.image}`}
                    alt={item.name}
                    style={{ width: "150px", height: "150px", cursor: "pointer" }}
                    onClick={() => {
                        navigate(`/product/${item._id}`)
                    }}
                  />
                </td>
                <td>{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <button
                    onClick={() => handleAddToCart(item._id)}
                    className="wishlistAddToCartBtn"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleRemoveFromWishlist(item._id)}
                    className="wishlistAddToCartBtn"
                  >
                    Remove From Wishlist
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Wishlist;
