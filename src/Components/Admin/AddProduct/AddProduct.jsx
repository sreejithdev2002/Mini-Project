import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "./AddProduct.css";

import { Products } from "../../../Services/AdminApi";

function AddProduct() {
  const initialValues = {
    name: "",
    brand: "",
    description: "",
    price: "",
    gender: "Male",
    isLuxury: false,
    category: "Casuals",
    image: null,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    brand: Yup.string().required("Brand name is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number().required("Price is required"),
  });

  const onSubmit = async (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("brand", values.brand);
    formData.append("description", values.description);
    formData.append("price", values.price);
    formData.append("gender", values.gender);
    formData.append("isLuxury", values.isLuxury);
    formData.append("category", values.category);
    formData.append("image", values.image);

    const response = await Products(formData);
    console.log(response);

    const { data, error } = response;
    if (error) {
      toast.error(error);
    } else if (data) {
      toast.success(`${data.name || "Product"} has been added`);
    } else {
      toast.error("Failed to add product");
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleFileChange = (e) => {
    formik.setFieldValue("image", e.currentTarget.files[0]);
  };

  return (
    <div className="mt-[200px] lg:mt-[140px] mb-10 mx-[50px]">
      <h1 className="text-3xl mb-3 text-start">Add Product</h1>
      <div className="bg-[#f8f8f8] rounded-lg p-5">
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          <div className="mb-[15px]">
            <label className="block font-semibold">Name</label>
            <input
              className="w-[100%] p-[10px] border border-[#ccc] rounded"
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
          <div className="mb-[15px]">
            <label className="block font-semibold">Brand</label>
            <input
              className="w-[100%] p-[10px] border border-[#ccc] rounded"
              type="text"
              name="brand"
              value={formik.values.brand}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="ENTER BRAND HERE..."
            />
            {formik.touched.brand && formik.errors.brand && (
              <p
                className="error-message"
                style={{ marginTop: "5px", color: "red" }}
              >
                {formik.errors.brand}
              </p>
            )}
          </div>
          <br />
          <div className="mb-[15px]">
            <label className="block font-semibold">Description</label>
            <textarea
              className="w-[100%] p-[10px] border border-[#ccc] rounded"
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
          <div className="mb-[15px]">
            <label className="block font-semibold">Price</label>
            <input
              className="w-[100%] p-[10px] border border-[#ccc] rounded"
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
          <div className="mb-[15px]">
            <label className="block font-semibold">Gender</label>
            <select
              className="w-[100%] p-[10px] border border-[#ccc] rounded"
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
          <div className="mb-[15px]">
            <label className="block font-semibold">Luxury</label>
            <select
              className="w-[100%] p-[10px] border border-[#ccc] rounded"
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
          <div className="mb-[15px]">
            <label className="block font-semibold">Category</label>
            <select
              className="w-[100%] p-[10px] border border-[#ccc] rounded"
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
          <div className="mb-[15px]">
            <label className="block font-semibold">Image</label>
            <input
              className="w-[100%] p-[10px] border border-[#ccc] rounded"
              type="file"
              name="image"
              onChange={handleFileChange}
            />
          </div>
          <br />
          <button
            type="submit"
            className="bg-blue-500 text-white border-none rounded py-[10px] px-5 cursor-pointer hover:bg-blue-600 transition-colors duration-300 w-[100%] lg:w-[20%]"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
