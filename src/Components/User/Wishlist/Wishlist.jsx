import React, { useEffect, useState } from "react";
import { addToCart, getWishlist, removeFromWishlist } from "../../../Services/UserApi";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
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
      toast.error("Failed to add product to cart");
    }
  };

  const handleRemoveFromWishlist = async (productId) => {
    try {
      await removeFromWishlist(productId);
      setWishlistData(wishlistData.filter((item) => item._id !== productId));
      toast.success("Product removed from wishlist");
    } catch (error) {
      toast.error("Failed to remove product from wishlist");
    }
  };

  if (loading) {
    return (
      <div className="store-loading-page">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="store-loading-page">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops!</h2>
          <p className="text-gray-500">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="store-interior store-interior--wishlist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="font-display text-3xl font-bold text-gray-900">My Wishlist</h1>
            <p className="text-gray-500 mt-2">{wishlistData.length} {wishlistData.length === 1 ? 'item' : 'items'} saved</p>
          </div>
          {wishlistData.length > 0 && (
            <Link to="/latestarrival" className="text-sm font-medium text-black hover:text-gray-600 transition-colors hidden sm:block border-b border-black hover:border-gray-600 pb-0.5">
              Continue Shopping
            </Link>
          )}
        </div>

        {wishlistData.length === 0 ? (
          <Empty message="Your wishlist is empty" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistData.map((item) => (
              <div key={item._id} className="bg-white rounded-2xl p-5 flex flex-col shadow-sm border border-gray-100 group">
                
                {/* Image */}
                <div 
                  className="relative aspect-square mb-5 bg-gray-50 rounded-xl overflow-hidden cursor-pointer flex items-center justify-center p-4"
                  onClick={() => navigate(`/product/${item._id}`)}
                >
                  <img
                    src={`${import.meta.env.VITE_BASE_URL}/public/images/products/${item.image}`}
                    alt={item.name}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=300";
                    }}
                  />
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveFromWishlist(item._id);
                    }}
                    className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white text-gray-400 hover:text-red-500 rounded-full backdrop-blur-sm transition-all shadow-sm"
                    title="Remove from wishlist"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col">
                  <h3 
                    className="font-display text-lg font-semibold text-gray-900 mb-1 cursor-pointer hover:text-gray-600 truncate"
                    onClick={() => navigate(`/product/${item._id}`)}
                  >
                    {item.name}
                  </h3>
                  <p className="text-xl font-bold text-gray-900 mb-6">₹{item.price.toFixed(2)}</p>
                  
                  <button
                    onClick={() => handleAddToCart(item._id)}
                    className="w-full py-3 mt-auto bg-black text-white rounded-xl font-medium text-sm hover:bg-gray-900 transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5 duration-200"
                  >
                    Add to Cart
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
