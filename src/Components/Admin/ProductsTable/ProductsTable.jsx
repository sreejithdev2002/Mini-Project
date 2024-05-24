import React, { useEffect, useState } from "react";
import "./ProductsTable.css";
import { Link } from "react-router-dom";

//sampleImage
import SampleImg from "../../../Assets/Images/example1.webp";
import { viewProducts } from "../../../Services/AdminApi";

function ProductsTable() {
  const [productsData, setProductsData] = useState([]);
  const [productsLength, setProductsLength] = useState(0);

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
                  src={SampleImg}
                  alt="Product"
                  style={{ height: "200px" }}
                />
              </td>
              <td>{product.description}</td>
              <td
                style={{
                  fontWeight: "bold",
                  color: "green",
                }}
              >
                ₹{product.price}
              </td>
              <td>
                <Link to={`/admin/edit/${product.id}`}>
                  <button className="adminProTableBtn">Edit</button>
                </Link>
                <button className="adminProTableBtn">Disable</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTable;
