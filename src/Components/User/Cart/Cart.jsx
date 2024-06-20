import React, { useEffect, useState } from "react";
import "./Cart.css";
import { getCart } from "../../../Services/UserApi";
import Loader from "../Loader/Loader";
import Empty from "../Empty/Empty";
import { useNavigate } from "react-router-dom";

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
      setError(err.message);
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
      <div style={{ margin: "300px" }}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="cart">
      <div className="cartHeading">
        <h1>Shopping Cart</h1>
      </div>
      {cartData.length === 0 ? (
        <Empty message="No Products in Cart" />
      ) : (
        <table className="cartTable">
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((item) => (
              <tr key={item.product._id}>
                <td>
                  <img
                    src={`http://localhost:8000/public/images/products/${item.product.image}`}
                    alt={item.product.name}
                    style={{
                      width: "250px",
                      height: "250px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      navigate(`/product/${item.product._id}`);
                    }}
                  />
                </td>
                <td>{item.product.name}</td>
                <td>{item.quantity}</td>
                <td>{item.product.price.toFixed(2)}</td>
                <td>{(item.quantity * item.product.price).toFixed(2)}</td>
                <td>
                  <button
                  className="cartBuyNowBtn">
                    Buy Now
                  </button>
                  <button
                  className="cartRemoveBtn">
                    Remove from Cart
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

export default Cart;
