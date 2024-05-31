import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "./EditProduct.css";
import { getProductById, updateProduct } from "../../../Services/AdminApi"; // Assuming you have these API functions
import { useParams } from "react-router-dom";

function EditProduct() {
  const { productId } = useParams();

  const initialValues = {
    name: "",
    brand: "",
    description: "",
    price: "",
    gender: "Male",
    isLuxury: false,
    dateAdded: "",
    category: "Casuals",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    brand: Yup.string().required("Brand name is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number().required("Price is required"),
    dateAdded: Yup.string().required("Date Added is required"),
  });

  const onSubmit = async (values) => {
    values.dateAdded = new Date(values.dateAdded);

    const response = await updateProduct(productId, values); // Use updateProduct for editing
    const { data } = response;
    if (!data) return toast.error("Failed to update product");
    if (data.name) {
      toast.success(`${data.name} has been updated`);
    } else {
      toast.success("Product has been updated successfully");
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await getProductById(productId);
      const product = response.data;
      if (product) {
        formik.setValues({
          name: product.name || "",
          brand: product.brand || "",
          description: product.description || "",
          price: product.price || "",
          gender: product.gender || "Male",
          isLuxury: product.isLuxury || false,
          dateAdded: product.dateAdded ? product.dateAdded.split("T")[0] : "",
          category: product.category || "Casuals",
        });
      }
    };
    fetchProduct();
  }, [productId]);

  return (
    <div className="addProduct">
      <h1>Edit Product</h1>
      <div className="addProductSection">
        <form onSubmit={formik.handleSubmit}>
          {/* Form fields */}
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
              <p className="error-message" style={{ marginTop: "5px", color: "red" }}>
                {formik.errors.name}
              </p>
            )}
          </div>
          <br />
          <div className="addProductInputDiv">
            <label>Brand</label>
            <input
              type="text"
              name="brand"
              value={formik.values.brand}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="ENTER BRAND HERE..."
            />
            {formik.touched.brand && formik.errors.brand && (
              <p className="error-message" style={{ marginTop: "5px", color: "red" }}>
                {formik.errors.brand}
              </p>
            )}
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
              <p className="error-message" style={{ marginTop: "5px", color: "red" }}>
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
              <p className="error-message" style={{ marginTop: "5px", color: "red" }}>
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
              <p className="error-message" style={{ marginTop: "5px", color: "red" }}>
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
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
