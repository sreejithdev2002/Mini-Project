import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, updateProduct } from "../../../Services/AdminApi";
import "./EditProduct.css";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    description: "",
    price: "",
    gender: "Male",
    isLuxury: "No",
    category: "Casuals",
    disableProduct: false,
    image: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProductById(id)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setError("There was an error fetching the product!");
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { image, ...updatedProduct } = product;
    updateProduct(id, updatedProduct)
      .then((response) => {
        navigate("/admin/view");
      })
      .catch((error) => {
        setError("There was an error updating the product!");
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="mt-[200px] lg:mt-[140px] mb-10 mx-[50px]">
      <h1 className="text-3xl mb-3 text-start">Edit Product</h1>
      <div className="bg-[#f8f8f8] rounded-lg p-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-[15px]">
            <label htmlFor="name" className="block font-semibold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="w-[100%] p-[10px] border border-[#ccc] rounded"
              required
            />
          </div>
          <div className="mb-[15px]">
            <label htmlFor="brand" className="block font-semibold">
              Brand:
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={product.brand}
              onChange={handleChange}
              className="w-[100%] p-[10px] border border-[#ccc] rounded"
              required
            />
          </div>
          <div className="mb-[15px]">
            <label htmlFor="description" className="block font-semibold">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleChange}
              className="w-[100%] p-[10px] border border-[#ccc] rounded"
              required
            />
          </div>
          <div className="mb-[15px]">
            <label htmlFor="price" className="block font-semibold">
              Price:
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="w-[100%] p-[10px] border border-[#ccc] rounded"
              required
            />
          </div>
          <div className="mb-[15px]">
            <label htmlFor="gender" className="block font-semibold">
              Gender:
            </label>
            <select
              id="gender"
              name="gender"
              value={product.gender}
              onChange={handleChange}
              className="w-[100%] p-[10px] border border-[#ccc] rounded"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="mb-[15px]">
            <label htmlFor="isLuxury" className="block font-semibold">
              Is Luxury:
            </label>
            <select
              id="isLuxury"
              name="isLuxury"
              value={product.isLuxury}
              onChange={handleChange}
              className="w-[100%] p-[10px] border border-[#ccc] rounded"
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="mb-[15px]">
            <label htmlFor="category" className="block font-semibold">
              Category:
            </label>
            <select
              id="category"
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-[100%] p-[10px] border border-[#ccc] rounded"
            >
              <option value="Casuals">Casuals</option>
              <option value="Sandals">Sandals</option>
              <option value="Sneakers">Sneakers</option>
              <option value="Formals">Formals</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white border-none rounded py-[10px] px-5 cursor-pointer hover:bg-blue-600 transition-colors duration-300 w-[100%] lg:w-[20%]"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
