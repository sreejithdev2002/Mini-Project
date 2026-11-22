import React, { useEffect, useState } from "react";
import { getCart } from "../../../Services/UserApi";
import Loader from "../Loader/Loader";
import Empty from "../Empty/Empty";
import { useNavigate, Link } from "react-router-dom";

function Cart() {
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchCart = async () => {
    try {
      const response = await getCart();
      setCartData(response.data);
    } catch (err) {
      setError("Failed to fetch Cart");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

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

  const subtotal = cartData.reduce((total, item) => total + (item.quantity * item.product.price), 0);

  return (
    <div className="store-interior store-interior--cart">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-gray-900">Your Cart</h1>
          <p className="text-gray-500 mt-2">{cartData.length} {cartData.length === 1 ? 'item' : 'items'} in your cart</p>
        </div>

        {cartData.length === 0 ? (
          <Empty message="Your cart is empty" />
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartData.map((item) => (
                <div key={item.product._id} className="bg-white rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row gap-6 shadow-sm border border-gray-100 items-center sm:items-start group">
                  
                  {/* Product Image */}
                  <div 
                    className="w-32 h-32 bg-gray-50 rounded-xl flex-shrink-0 flex items-center justify-center p-4 cursor-pointer overflow-hidden"
                    onClick={() => navigate(`/product/${item.product._id}`)}
                  >
                    <img
                      src={`${import.meta.env.VITE_BASE_URL}/public/images/products/${item.product.image}`}
                      alt={item.product.name}
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=300";
                      }}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-grow flex flex-col justify-between w-full">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 
                          className="font-display text-lg font-semibold text-gray-900 cursor-pointer hover:text-black line-clamp-1"
                          onClick={() => navigate(`/product/${item.product._id}`)}
                        >
                          {item.product.name}
                        </h3>
                        <span className="font-bold text-gray-900 whitespace-nowrap ml-4">
                          ₹{(item.quantity * item.product.price).toFixed(2)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">₹{item.product.price.toFixed(2)} each</p>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center space-x-3 bg-gray-50 rounded-lg px-3 py-1">
                        <span className="text-sm text-gray-500 font-medium">Qty:</span>
                        <span className="text-sm font-semibold text-gray-900">{item.quantity}</span>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="text-sm font-medium text-red-500 hover:text-red-600 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-50">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-28">
                <h2 className="font-display text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-medium text-gray-900">₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="font-medium text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span className="font-medium text-gray-900">Calculated at checkout</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-900">Total</span>
                    <span className="font-display text-2xl font-bold text-gray-900">₹{subtotal.toFixed(2)}</span>
                  </div>
                </div>

                <button className="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-900 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Proceed to Checkout
                </button>
                <Link to="/latestarrival" className="block text-center mt-4 text-sm font-medium text-gray-500 hover:text-black transition-colors">
                  Continue Shopping
                </Link>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
