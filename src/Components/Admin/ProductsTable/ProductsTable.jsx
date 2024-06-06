import React, { useEffect, useState } from "react";
import "./ProductsTable.css";
import { useNavigate } from "react-router-dom";
import SampleImg from "../../../Assets/Images/example1.webp";
import {
  deleteProduct,
  disableProduct,
  viewProducts,
} from "../../../Services/AdminApi";
import Empty from "../../User/Empty/Empty";

function ProductsTable() {
  const [productsData, setProductsData] = useState([]);
  const [productsLength, setProductsLength] = useState(0);
  const [disabledProducts, setDisabledProducts] = useState(0);
  const navigate = useNavigate();

  const handleEdit = (productId) => {
    navigate(`/admin/editproducts/${productId}`);
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

  const handleDelete = async (productId) => {
    try {
      await deleteProduct(productId);
      setProductsData((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      );
    } catch (error) {
      console.error("Error deleting product : ", error);
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


  if(productsData.length === 0){
    return <Empty message="No Products Available"/>
  }

  return (
    <div className="adminProducts">
      <h1 className="productsHeading">All Products</h1>
      <h3 className="totalProducts">Total Products: {productsLength}</h3>
      <h3 className="disabledProducts">Total Disabled Products: {disabledProducts}</h3>

      <table className="proTable">
        <thead>
          <tr>
            <th className="image">Image</th>
            <th className="name">Name</th>
            <th className="description">Description</th>
            <th className="category">Category</th>
            <th className="gender">Gender</th>
            <th className="price">Price</th>
            <th className="actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          {productsData.map((product) => {
            const imageURL = product.image
              ? `http://localhost:8000/public/images/products/${product.image}`
              : SampleImg;
            return (
              <tr key={product._id}>
                <td className="image">
                  <img
                    src={imageURL}
                    alt="Product"
                    className="productImg"
                  />
                </td>
                <td className="name">{product.name}</td>
                <td className="description">{product.description}</td>
                <td className="category">{product.category}</td>
                <td className="gender">{product.gender}</td>
                <td className="price">₹{product.price}</td>
                <td className="actions">
                  <button
                    onClick={() => handleEdit(product._id)}
                    className="editBtn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDisable(product._id)}
                    className={product.disableProduct ? "disableBtn" : "enableBtn"}
                  >
                    {product.disableProduct ? "Enable" : "Disable"}
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="deleteBtn"
                  >
                    Delete
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
