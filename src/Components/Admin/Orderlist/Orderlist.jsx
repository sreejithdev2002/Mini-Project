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
          const validOrders = response.data.orders.filter(
            (order) => order.product
          );
          setOrders(validOrders);
        } else {
          setOrders([]);
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

  // const baseURL = "https://mini-project-backend-production.up.railway.app";
  const baseURL = "https://mini-project-backend-nv1x.onrender.com";

  return (
    <div className="my-[140px] lg:my-[50px] mx-2 lg:mx-5 relative top-20">
      <h1 className="my-2 lg:my-5 text-4xl">All Orders</h1>
      <h3 className="my-2 lg:my-[10px] flex lg:justify-end font-sans text-xl">Total Orders: {orders.length}</h3>
      <div>
      <table className="w-[100%] border-collapse mb-[100px]">
        <thead>
          <tr>
            <th className="px-[4px] lg:p-2 border-2 border-[#ddd] bg-[#f2f2f2] text-left font-sans">User</th>
            <th className="px-[4px] lg:p-2 border-2 border-[#ddd] bg-[#f2f2f2] text-left font-sans">Image</th>
            <th className="px-[4px] lg:p-2 border-2 border-[#ddd] bg-[#f2f2f2] text-left font-sans">Product</th>
            <th className="px-[4px] lg:p-2 border-2 border-[#ddd] bg-[#f2f2f2] text-left font-sans">Quantity</th>
            <th className="px-[4px] lg:p-2 border-2 border-[#ddd] bg-[#f2f2f2] text-left font-sans">Price</th>
            <th className="px-[4px] lg:p-2 border-2 border-[#ddd] bg-[#f2f2f2] text-left font-sans">Date</th>
            <th className="px-[4px] lg:p-2 border-2 border-[#ddd] bg-[#f2f2f2] text-left font-sans">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id} className="even:bg-[#f2f2f2] hover:bg-[#ddd] text-[12px] lg:text-base">
              <td className="border-2 border-[#ddd] px-[4px] lg:p-2 ">
                {order.user ? order.user.username : "Unknown user"}
              </td>
              <td className="border-2 border-[#ddd] px-[4px] lg:p-2 ">
                {order.product.image ? (
                  <img
                    src={`${baseURL}/public/images/products/${order.product.image}`}
                    alt="Product"
                    className="h-[50px] max-w-[50px] lg:h-[100px] lg:max-w-[100px]"
                  />
                ) : (
                  "No image"
                )}
              </td>
              <td className="border-2 border-[#ddd] px-[4px] lg:p-2 ">{order.product.name}</td>
              <td className="border-2 border-[#ddd] px-[4px] lg:p-2 ">{order.quantity}</td>
              <td className="border-2 border-[#ddd] px-[4px] lg:p-2 ">{order.quantity * order.product.price}</td>
              <td className="border-2 border-[#ddd] px-[4px] lg:p-2 ">
                {new Date(order.createdAt).toLocaleDateString()}
              </td>
              <td className="border-2 border-[#ddd] px-[4px] lg:p-2 ">
                <button
                  onClick={() => handleDelete(order._id)}
                  className="w-[50px] lg:w-[100px] h-10 m-[5px] border-none rounded-md lg:text-sm cursor-pointer text-white bg-red-500 hover:bg-red-600 transition-colors duration-300"
                  id="orderDelete"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Orderlist;
