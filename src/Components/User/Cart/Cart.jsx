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
      <div style={{ margin: "300px" }}>
        <Loader />
      </div>
    );
  }

  if (error) {
    if (error)
      return (
        <div className="h-[71.2vh] flex justify-center items-center text-[2rem]">
          {error}
        </div>
      );
  }

  const tableHead = [
    {
      title: "Product Image",
    },
    {
      title: "Product Title",
    },
    {
      title: "Quantity",
    },
    {
      title: "Price",
    },
    {
      title: "Total Price",
    },
    {
      title: "Action",
    },
  ];

  return (
    <div className="flex flex-col pb-[50px] pt-[200px] bg-[#f0f0f045] lg:pt-[150px]">
      <div className="ml-[50px] mb-[20px]">
        <h1 className="text-2xl">Shopping Cart</h1>
      </div>
      {cartData.length !== 0 ? (
        <Empty message="No Products in Cart" />
      ) : (
        <table className="w-auto border-collapse mb-[100px] mx-[40px] lg:mx-[50px] text-center text-[12px] lg:text-lg">
          <thead>
            <tr className="even:bg-gray-200">
              <th className="border-[1px] border-[#ddd] p-2 bg-[#f2f2f2]">
                Product Image
              </th>
              <th className="border-[1px] border-[#ddd] p-2 bg-[#f2f2f2]">
                Product Name
              </th>
              <th className="border-[1px] border-[#ddd] p-2 bg-[#f2f2f2]">
                Quantity
              </th>
              <th className="border-[1px] border-[#ddd] p-2 bg-[#f2f2f2]">
                Price
              </th>
              <th className="border-[1px] border-[#ddd] p-2 bg-[#f2f2f2]">
                Total Price
              </th>
              <th className="border-[1px] border-[#ddd] p-2 bg-[#f2f2f2]">
                Action
              </th>
              {tableHead.map((data) => (
                <th className="border-[1px] border-[#ddd] p-2 bg-[#f2f2f2]">
                  {data.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cartData.map((item) => (
              <tr
                key={item.product._id}
                className="even:bg-gray-200 hover:bg-[#ddd]"
              >
                <td className="border-[1px] border-[#ddd] p-1 bg-[#f9f9f9]">
                  <img
                    src={`https://mini-project-backend-production.up.railway.app/public/images/products/${item.product.image}`}
                    alt={item.product.name}
                    className="h-[80px] lg:h-[200px] w-auto cursor-pointer"
                    onClick={() => {
                      navigate(`/product/${item.product._id}`);
                    }}
                  />
                </td>
                <td className="border-[1px] border-[#ddd] p-1 bg-[#f9f9f9]">
                  {item.product.name}
                </td>
                <td className="border-[1px] border-[#ddd] p-1 bg-[#f9f9f9]">
                  {item.quantity}
                </td>
                <td className="border-[1px] border-[#ddd] p-1 bg-[#f9f9f9]">
                  {item.product.price.toFixed(2)}
                </td>
                <td className="border-[1px] border-[#ddd] p-1 bg-[#f9f9f9]">
                  {(item.quantity * item.product.price).toFixed(2)}
                </td>
                <td className="border-[1px] border-[#ddd] p-1 bg-[#f9f9f9]">
                  <button className="p-2 min-w-24 lg:min-w-[100px] lg:min-h-[50px] text-sm lg:p-[10px] border-none bg-green-600 hover:bg-green-700 transition duration-200 text-white rounded mx-[5px] my-1">
                    Buy Now
                  </button>
                  <button className="p-2 min-w-24 lg:min-w-[100px] lg:min-h-[50px] text-sm lg:p-[10px] border-none bg-red-600 hover:bg-red-700 transition duration-200 text-white rounded mx-[5px] my-1">
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

export default Cart;

// import React from "react";

// const Cart = () => {
//   const formData = [
//     {
//       title: "Name",
//       type: "text",
//       color: "bg-yellow-200",
//     },
//     {
//       title: "Password",
//       type: "password",
//       color: "bg-blue-200",
//     },
//     {
//       title: "file",
//       type: "file",
//       color: "bg-red-200",
//     },
//     {
//       title: "Check",
//       type: "checkbox",
//       color: "bg-pink-200",
//     },
//     {
//       title: "Age",
//       type: "number",
//       color: "bg-gray-200",
//     },
//     {
//       title: "Address2",
//       type: "textarea",
//       height: "h-20",
//       color: "bg-red-200",
//     },
//     {
//       title: "Address",
//       type: "textarea",
//       height: "h-20",
//       color: "bg-green-200",
//     },
//     {
//       title: "Pincode",
//       type: "number",
//       color: "bg-blue-200",
//     },
//     {
//       title: "Phone Number",
//       type: "number",
//       color: "bg-red-200",
//       border: "border-4 border-black"
//     },
//   ];

//   return (
//     <div className="my-20 mx-10 flex flex-col justify-center items-center w-full">
//       {formData.map((items) => (
//         <div>
//           <input
//             className={`p-2 my-2 border-2 ${items.color} ${items.height} ${items.border}`}
//             type={items.type}
//             placeholder={items.title}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cart;
