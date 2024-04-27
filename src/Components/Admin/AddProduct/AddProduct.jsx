import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "./AddProduct.css";

import { Products } from "../../../Services/AdminApi";

function AddProduct() {
  const initialValues = {
    name: "",
    brand: "Adidas",
    description: "",
    price: "",
    gender: "Male",
    isLuxury: false,
    dateAdded: "",
    category: "Casuals",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number().required("Price is required"),
    dateAdded: Yup.string().required("Date Added is required"),
  });

  const onSubmit = async (values) => {
    values.dateAdded = new Date(values.dateAdded);
    
    console.log(values);
    const response = await Products(values);
    console.log(response); // Log the entire response object
  
    const { data } = response;
    if (!data) return toast.error("Failed to add product");
    if (data.name) {
      toast.success(`${data.name} has been added`);
    } else {
      toast.success("Product has been added successfully");
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="addProduct">
      <h1>Add Product</h1>
      <div className="addProductSection">
        <form onSubmit={formik.handleSubmit}>
          <div className="addProductInputDiv">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="ENTER NAME HERE..."
            />
            {formik.touched.name && formik.errors.name && (
              <p
                className="error-message"
                style={{ marginTop: "5px", color: "red" }}
              >
                {formik.errors.name}
              </p>
            )}
          </div>
          <br />
          <div className="addProductInputDiv">
            <label>Brand</label>
            <select
              name="brand"
              value={formik.values.brand}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="Adidas">Adidas</option>
              <option value="Nike">Nike</option>
              <option value="Puma">Puma</option>
              <option value="Reebok">Reebok</option>
            </select>
          </div>
          <br />
          <div className="addProductInputDiv">
            <label>Description</label>
            <textarea
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="PRODUCT DESCRIPTION..."
            />
            {formik.touched.description && formik.errors.description && (
              <p
                className="error-message"
                style={{ marginTop: "5px", color: "red" }}
              >
                {formik.errors.description}
              </p>
            )}
          </div>
          <br />
          <div className="addProductInputDiv">
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="ENTER PRICE HERE ..."
            />
            {formik.touched.price && formik.errors.price && (
              <p
                className="error-message"
                style={{ marginTop: "5px", color: "red" }}
              >
                {formik.errors.price}
              </p>
            )}
          </div>
          <br />
          <div className="addProductInputDiv">
            <label>Gender</label>
            <select
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
              value={formik.values.isLuxury}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
          <br />
          <div className="addProductInputDiv">
            <label>Date Added</label>
            <input
              type="text"
              name="dateAdded"
              value={formik.values.dateAdded}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="YYYY - MM - DD"
            />
            {formik.touched.dateAdded && formik.errors.dateAdded && (
              <p
                className="error-message"
                style={{ marginTop: "5px", color: "red" }}
              >
                {formik.errors.dateAdded}
              </p>
            )}
          </div>
          <br />
          <div className="addProductInputDiv">
            <label>Category</label>
            <select
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
  );
}

export default AddProduct;
