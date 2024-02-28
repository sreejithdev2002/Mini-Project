import React, { useState } from "react";
import "./AddProduct.css";

function AddProduct() {
  const [product, setProduct] = useState({
    id: '',
    name: "",
    description: "",
    price: "",
    gender: "Male",
    isLuxury: false,
    dateAdded: "",
    category: "Casuals",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Product Data", product);

    setProduct({
      id: '',
      name: "",
      description: "",
      price: "",
      gender: "Male",
      isLuxury: false,
      dateAdded: "",
      category: "Casuals",
    });
  };

  return (
    <>
      <div className="addProduct">
        <h1>Add Product</h1>
        <div className="addProductSection">
          <form onSubmit={handleSubmit}>
            <div className="addProductInputDiv">
              <label>ID</label>
              <input
                type="number"
                name="id"
                value={product.id}
                onChange={handleChange}
                placeholder="ENTER PRODUCT ID..."
                id="input"
              />
            </div>
            <br />
            <div className="addProductInputDiv">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleChange}
                placeholder="ENTER NAME HERE..."
                id="input"
              />
            </div>

            <br />
            <div className="addProductInputDiv">
              <label>Description</label>
              <textarea
                name="description"
                value={product.description}
                onChange={handleChange}
                placeholder="PRODUCT DESCRIPTION..."
                id="input"
              />
            </div>

            <br />
            <div className="addProductInputDiv">
              <label>Price</label>
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                placeholder="ENTER PRICE HERE ..."
                id="input"
              />
            </div>

            <br />
            <div className="addProductInputDiv">
              <label>Gender</label>
              <select
                name="gender"
                value={product.gender}
                onChange={handleChange}
                id="input"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <br />
            <div className="addProductInputDiv">
              <label>Luxury</label>
              <select
                name="isLuxury"
                value={product.isLuxury}
                onChange={handleChange}
                id="input"
              >
                <option value={true}>yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <br />
            <div className="addProductInputDiv">
              <label>Date Added</label>
              <input
                type="text"
                name="dateAdded"
                value={product.dateAdded}
                onChange={handleChange}
                placeholder="YYYY - MM - DD"
                id="input"
              />
            </div>

            <br />
            <div className="addProductInputDiv">
              <label>Category</label>
              <select
                name="category"
                value={product.category}
                onChange={handleChange}
                id="input"
              >
                <option value="Casuals">Casuals</option>
                <option value="Formals">Formals</option>
                <option value="Sandals">Sandals</option>
                <option value="Sneakers">Sneakers</option>
              </select>
            </div>

            <br />
            <button type="submit" id="AddProductBtn">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
