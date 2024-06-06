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
      <h1 className="orderHeading">All Orders</h1>
      <h3 className="totalOrders">Total Orders: {orders.length}</h3>
      <table className="orderTable">
        <thead>
          <tr>
            <th className="orderID">Order ID</th>
            <th className="userName">User</th>
            <th className="productImage">Image</th>
            <th className="productName">Product</th>
            <th className="quantity">Quantity</th>
            <th className="price">Price</th>
            <th className="date">Date</th>
            <th className="action">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td className="orderID">{order._id}</td>
              <td className="userName">{order.user ? order.user.username : "Unknown user"}</td>
              <td className="productImage">
                {order.product.image ? (
                  <img
                    src={`${baseURL}/public/images/products/${order.product.image}`}
                    alt="Product"
                    className="productImg"
                  />
                ) : (
                  "No image"
                )}
              </td>
              <td className="productName">{order.product.name}</td>
              <td className="quantity">{order.quantity}</td>
              <td className="price">{order.quantity * order.product.price}</td>
              <td className="date">{new Date(order.createdAt).toLocaleDateString()}</td>
              <td className="action">
                <button onClick={() => handleDelete(order._id)} id="orderDelete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orderlist;
