import React, { useEffect, useState } from "react";
import {
  addToCart,
  getWishlist,
  removeFromWishlist,
} from "../../../Services/UserApi";
import "./Wishlist.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Empty from "../../User/Empty/Empty";
import Loader from "../Loader/Loader";

function Wishlist() {
  const [wishlistData, setWishlistData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchWishlist = async () => {
    try {
      const response = await getWishlist();
      setWishlistData(response.data);
    } catch (error) {
      setError("Failed to fetch wishlist");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
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

  const handleRemoveFromWishlist = async (productId) => {
    try {
      await removeFromWishlist(productId);
      setWishlistData(wishlistData.filter((item) => item._id !== productId));
      toast.success("Product removed from wishlist");
    } catch (error) {
      console.error("Failed to remove product from wishlist", error);
      toast.error("Failed to remove product from wishlist");
    }
  };

  if (loading)
    return (
      <div style={{ margin: "300px" }}>
        <Loader />
      </div>
    );

  if (error)
    return (
      <div
      className="h-[71.2vh] flex justify-center items-center text-[2rem]"
      >
        {error}
      </div>
    );
  return (
    <div className="flex flex-col pb-[50px] pt-[200px] bg-[#f0f0f045] lg:pt-[150px]">
      <div className="ml-[50px] mb-[20px]">
        <h1 className="text-2xl">My Wishlist</h1>
      </div>
      {wishlistData.length === 0 ? (
        <Empty message="No Product in Wishlist" />
      ) : (
        <table className="w-auto border-collapse mb-[100px] mx-[50px] text-center">
          <thead>
            <tr className="even:bg-gray-200">
              <th className="border-[1px] border-[#ddd] p-2 bg-[#f2f2f2]">
                Image
              </th>
              <th className="border-[1px] border-[#ddd] p-2 bg-[#f2f2f2]">
                Name
              </th>
              <th className="border-[1px] border-[#ddd] p-2 bg-[#f2f2f2]">
                Price
              </th>
              <th className="border-[1px] border-[#ddd] p-2 bg-[#f2f2f2]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {wishlistData.map((item) => (
              <tr key={item._id} className="even:bg-gray-200 hover:bg-[#ddd]">
                <td className="border-[1px] border-[#ddd] p-1 bg-[#f9f9f9]">
                  <img
                    src={`https://mini-project-backend-nv1x.onrender.com/public/images/products/${item.image}`}
                    alt={item.name}
                    className="h-[80px] lg:h-[200px] w-auto cursor-pointer"
                    onClick={() => {
                      navigate(`/product/${item._id}`);
                    }}
                  />
                </td>
                <td className="border-[1px] border-[#ddd] p-1 bg-[#f9f9f9]">
                  {item.name}
                </td>
                <td className="border-[1px] border-[#ddd] p-1 bg-[#f9f9f9]">
                  {item.price.toFixed(2)}
                </td>
                <td className="border-[1px] border-[#ddd] p-1 bg-[#f9f9f9]">
                  <button
                    onClick={() => handleAddToCart(item._id)}
                    className="p-2 min-w-24 lg:min-w-[100px] lg:min-h-[50px] text-sm lg:p-[10px] border-none bg-green-600 hover:bg-green-700 transition duration-200 text-white rounded mx-[5px] my-1"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleRemoveFromWishlist(item._id)}
                    className="p-2 min-w-24 lg:min-w-[100px] lg:min-h-[50px] text-sm lg:p-[10px] border-none bg-red-600 hover:bg-red-700 transition duration-200 text-white rounded mx-[5px] my-1"
                  >
                    Remove
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
