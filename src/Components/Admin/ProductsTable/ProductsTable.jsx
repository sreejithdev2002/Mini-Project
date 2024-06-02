import React, { useEffect, useState } from "react";
import "./ProductsTable.css";
import { useNavigate } from "react-router-dom";
import SampleImg from "../../../Assets/Images/example1.webp";
import { disableProduct, viewProducts } from "../../../Services/AdminApi";

function ProductsTable() {
  const [productsData, setProductsData] = useState([]);
  const [productsLength, setProductsLength] = useState(0);
  const [disabledProducts, setDisabledProducts] = useState(0);
  const navigate = useNavigate();

  const handleEdit = (productId) => {
    navigate(`/products/${productId}`);
  };

  const handleDisable = async (productId) => {
    try {
      await disableProduct(productId);
      setProductsData((prevProducts) =>
        prevProducts.map((product) =>
          product._id === productId
            ? { ...product, disableProduct: !product.disableProduct }
            : product
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
        setDisabledProducts(
          data.ViewProducts.filter((products) => products.disableProduct).length
        );
      } else {
        console.error("Error fetching products:", data.message);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [productsData]);

  return (
    <div className="adminProducts">
      <h1>All Products</h1>
      <h3>Total Products: {productsLength}</h3>
      <h3>Total Disabled Products: {disabledProducts}</h3>

      <table className="proTable">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Gender</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productsData.map((product) => {
            const imageURL = product.image
              ? `http://localhost:8000/public/images/products/${product.image}`
              : SampleImg;
            return (
              <tr key={product._id}>
                <td>
                  <img
                    src={imageURL}
                    alt="Product"
                    style={{ height: "200px", maxWidth: "160px" }}
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>{product.gender}</td>
                <td style={{ fontWeight: "bold", color: "green" }}>
                  ₹{product.price}
                </td>
                <td>
                  <button
                    onClick={() => handleEdit(product._id)}
                    className="adminProTableBtnRed"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDisable(product._id)}
                    className={
                      product.disableProduct
                        ? "adminProTableBtnGreen"
                        : "adminProTableBtnRed"
                    }
                  >
                    {product.disableProduct ? "Enable" : "Disable"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTable;
