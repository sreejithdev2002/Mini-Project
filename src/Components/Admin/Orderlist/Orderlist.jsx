import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Orderlist.css";
import { getAllOrders } from "../../../Services/AdminApi";

function Orderlist() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getAllOrders();
        setOrders(response.data.orders);
      } catch (err) {
        setError("Failed to fetch orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const baseURL = "http://localhost:8000";

  return (
    <>
      <div className="adminOrders">
        <h1>All Orders</h1>
        <h3>Total Orders: {orders.length}</h3>
        <table className="orderTable">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>User</th>
              <th>Image</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user.username}</td>
                <td>
                  <img
                    src={`${baseURL}/public/images/products/${order.product.image}`}
                    alt="Product"
                    style={{ height: "200px", maxWidth: "160px" }}
                  />
                </td>
                <td>{order.product.name}</td>
                <td>{order.quantity}</td>
                <td>{order.quantity * order.product.price}</td>
                <td>{new Date(order.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Orderlist;
