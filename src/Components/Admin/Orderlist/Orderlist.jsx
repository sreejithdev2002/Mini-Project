import React, { useEffect, useState } from "react";
import "./Orderlist.css";
import { deleteOrder, getAllOrders } from "../../../Services/AdminApi";
import Empty from "../../User/Empty/Empty";

function Orderlist() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getAllOrders();
        if (response.data && response.data.orders) {
          // Filter out orders where the product is not present
          const validOrders = response.data.orders.filter(
            (order) => order.product
          );
          setOrders(validOrders);
        } else {
          setOrders([]); // Handle the case where orders are not present
        }
      } catch (err) {
        setError("Failed to fetch orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleDelete = async (orderId) => {
    try {
      await deleteOrder(orderId);
      // Update the orders state to remove the deleted order
      setOrders(orders.filter((order) => order._id !== orderId));
    } catch (err) {
      setError("Failed to delete order");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (orders.length === 0) {
    return <Empty message="No Orders Available" />;
  }

  const baseURL = "http://localhost:8000";

  return (
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.user ? order.user.username : "Unknown user"}</td>
              <td>
                {order.product.image ? (
                  <img
                    src={`${baseURL}/public/images/products/${order.product.image}`}
                    alt="Product"
                    style={{ height: "200px", maxWidth: "160px" }}
                  />
                ) : (
                  "No image"
                )}
              </td>
              <td>{order.product.name}</td>
              <td>{order.quantity}</td>
              <td>{order.quantity * order.product.price}</td>
              <td>{new Date(order.createdAt).toLocaleDateString()}</td>
              <td>
                <button onClick={() => handleDelete(order._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orderlist;
