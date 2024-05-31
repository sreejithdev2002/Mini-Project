// import React, { useEffect, useState } from "react";
// import "./ProductsTable.css";
// import { Link, useNavigate } from "react-router-dom";

// //sampleImage
// import SampleImg from "../../../Assets/Images/example1.webp";
// import { viewProducts } from "../../../Services/AdminApi";

// function ProductsTable() {
//   const [productsData, setProductsData] = useState([]);
//   const [productsLength, setProductsLength] = useState(0);

//   const navigate = useNavigate();

//   const handleEdit = (productId) => {
//     navigate(`/products/${productId}`);
//   }

//   const fetchData = async () => {
//     try {
//       const { data } = await viewProducts();
//       if (data.status) {
//         setProductsData(data.ViewProducts);
//         setProductsLength(data.ViewProducts.length);
//       } else {
//         console.error("Error fetching products:", data.message);
//       }
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="adminProducts">
//       <h1>All Products</h1>
//       <h3>Total Products: {productsLength}</h3>
//       <table className="proTable">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Image</th>
//             <th>Description</th>
//             <th>Price</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {productsData.map((product) => (
//             <tr key={product._id}>
//               <td>{product.name}</td>
//               <td>
//                 <img
//                   src={SampleImg}
//                   alt="Product"
//                   style={{ height: "200px" }}
//                 />
//               </td>
//               <td>{product.description}</td>
//               <td
//                 style={{
//                   fontWeight: "bold",
//                   color: "green",
//                 }}
//               >
//                 ₹{product.price}
//               </td>
//               <td>
//                   <button onClick={() => handleEdit(product.id)} className="adminProTableBtn">Edit</button>
//                 <button className="adminProTableBtn">Disable</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ProductsTable;

// import React, { useEffect, useState } from "react";
// import "./ProductsTable.css";
// import { useNavigate } from "react-router-dom";
// import SampleImg from "../../../Assets/Images/example1.webp";
// import { disableProduct, viewProducts } from "../../../Services/AdminApi";

// function ProductsTable() {
//   const [productsData, setProductsData] = useState([]);
//   const [productsLength, setProductsLength] = useState(0);
//   const navigate = useNavigate();

//   const handleEdit = (productId) => {
//     navigate(`/products/${productId}`);
//   };

//   const handleDisable = async (productId) => {
//     try {
//       await disableProduct(productId);
//       setProductsData((prevProducts) =>
//         prevProducts.map((product) =>
//           product._id === productId ? { ...product, disableProduct: true } : product
//         )
//       );
//     } catch (error) {
//       console.error("Error disabling product:", error);
//     }
//   };

//   const fetchData = async () => {
//     try {
//       const { data } = await viewProducts();
//       if (data.status) {
//         setProductsData(data.ViewProducts);
//         setProductsLength(data.ViewProducts.length);
//       } else {
//         console.error("Error fetching products:", data.message);
//       }
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="adminProducts">
//       <h1>All Products</h1>
//       <h3>Total Products: {productsLength}</h3>
//       <table className="proTable">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Image</th>
//             <th>Description</th>
//             <th>Price</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {productsData.map((product) => (
//             <tr key={product._id}>
//               <td>{product.name}</td>
//               <td>
//                 <img
//                   src={product.image ? product.image : SampleImg}
//                   alt="Product"
//                   style={{ height: "200px" }}
//                 />
//               </td>
//               <td>{product.description}</td>
//               <td style={{ fontWeight: "bold", color: "green" }}>
//                 ₹{product.price}
//               </td>
//               <td>
//                 <button onClick={() => handleEdit(product._id)} className="adminProTableBtn">Edit</button>
//                 <button
//                   onClick={() => handleDisable(product._id)}
//                   className="adminProTableBtn"
//                   disabled={product.disableProduct}
//                 >
//                   {product.disableProduct ? "Disabled" : "Disable"}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ProductsTable;



import React, { useEffect, useState } from "react";
import "./ProductsTable.css";
import { useNavigate } from "react-router-dom";
import SampleImg from "../../../Assets/Images/example1.webp";
import { disableProduct, viewProducts } from "../../../Services/AdminApi";

function ProductsTable() {
  const [productsData, setProductsData] = useState([]);
  const [productsLength, setProductsLength] = useState(0);
  const navigate = useNavigate();

  const handleEdit = (productId) => {
    navigate(`/products/${productId}`);
  };

  const handleDisable = async (productId) => {
    try {
      await disableProduct(productId);
      setProductsData((prevProducts) =>
        prevProducts.map((product) =>
          product._id === productId ? { ...product, disableProduct: !product.disableProduct } : product
        )
      );
    } catch (error) {
      console.error("Error toggling product status:", error);
    }
  };

  const fetchData = async () => {
    try {
      const { data } = await viewProducts();
      if (data.status) {
        setProductsData(data.ViewProducts);
        setProductsLength(data.ViewProducts.length);
      } else {
        console.error("Error fetching products:", data.message);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="adminProducts">
      <h1>All Products</h1>
      <h3>Total Products: {productsLength}</h3>
      <table className="proTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productsData.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>
                <img
                  src={product.image ? product.image : SampleImg}
                  alt="Product"
                  style={{ height: "200px" }}
                />
              </td>
              <td>{product.description}</td>
              <td style={{ fontWeight: "bold", color: "green" }}>
                ₹{product.price}
              </td>
              <td>
                <button onClick={() => handleEdit(product._id)} className="adminProTableBtnRed">Edit</button>
                <button
                  onClick={() => handleDisable(product._id)}
                  className={product.disableProduct ? "adminProTableBtnGreen" : "adminProTableBtnRed"}
                >
                  {product.disableProduct ? "Enable" : "Disable"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTable;
