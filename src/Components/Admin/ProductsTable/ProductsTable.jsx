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

  if (productsData.length === 0) {
    return <Empty message="No Products Available" />;
  }

  return (
    <div className="my-[140px] lg:my-[50px] mx-2 lg:mx-5 relative top-20">
      <h1 className="my-2 lg:my-5 text-4xl">All Products</h1>
      <h3 className="lg:my-[10px] flex lg:justify-end font-sans text-xl">
        Total Products: {productsLength}
      </h3>
      <h3 className="mb-2 lg:my-[10px] flex lg:justify-end font-sans text-xl">
        Total Disabled Products: {disabledProducts}
      </h3>

      <table className="w-[100%] border-collapse mb-[100px]">
        <thead>
          <tr>
            <th className="px-[4px] lg:p-2 border-2 border-[#ddd] bg-[#f2f2f2] text-left font-sans">
              Image
            </th>
            <th className="px-[4px] lg:p-2 border-2 border-[#ddd] bg-[#f2f2f2] text-left font-sans">
              Name
            </th>
            <th className="px-[4px] lg:p-2 border-2 border-[#ddd] bg-[#f2f2f2] text-left font-sans">
              Description
            </th>
            <th className="px-[4px] lg:p-2 border-2 border-[#ddd] bg-[#f2f2f2] text-left font-sans">
              Category
            </th>
            <th className="px-[4px] lg:p-2 border-2 border-[#ddd] bg-[#f2f2f2] text-left font-sans">
              Gender
            </th>
            <th className="px-[4px] lg:p-2 border-2 border-[#ddd] bg-[#f2f2f2] text-left font-sans">
              Price
            </th>
            <th className="px-[4px] border-2 border-[#ddd] bg-[#f2f2f2] text-left font-sans">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {productsData.map((product) => {
            const imageURL = product.image
              ? `https://mini-project-backend-production.up.railway.app/public/images/products/${product.image}`
              : SampleImg;
            return (
              <tr
                key={product._id}
                className="even:bg-[#f2f2f2] hover:bg-[#ddd] text-[12px] lg:text-base"
              >
                <td className="border-2 border-[#ddd] px-[4px] lg:p-2 ">
                  <img
                    src={imageURL}
                    alt="Product"
                    className="h-[50px] max-w-[50px] lg:h-[100px] lg:max-w-[100px]"
                  />
                </td>
                <td className="border-2 border-[#ddd] px-[4px] lg:p-2 ">
                  {product.name}
                </td>
                <td className="border-2 border-[#ddd] px-[4px] lg:p-2 ">
                  {product.description}
                </td>
                <td className="border-2 border-[#ddd] px-[4px] lg:p-2 ">
                  {product.category}
                </td>
                <td className="border-2 border-[#ddd] px-[4px] lg:p-2 ">
                  {product.gender}
                </td>
                <td className="border-2 border-[#ddd] px-[4px] lg:p-2 text-green-700">
                  ₹{product.price}
                </td>
                <td className="border-2 border-[#ddd] px-[4px] lg:p-2 ">
                  <button
                    onClick={() => handleEdit(product._id)}
                    className="w-[50px] lg:w-[100px] h-10 m-[5px] border-none rounded-md lg:text-sm cursor-pointer bg-red-500 text-white hover:bg-red-600 transition-colors duration-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDisable(product._id)}
                    className={
                      product.disableProduct
                        ? "w-[50px] lg:w-[100px] h-10 m-[5px] border-none rounded-md lg:text-sm cursor-pointer text-white bg-green-500 hover:bg-green-600 transition-colors duration-300"
                        : "w-[50px] lg:w-[100px] h-10 m-[5px] border-none rounded-md lg:text-sm cursor-pointer text-white bg-red-500 hover:bg-red-600 transition-colors duration-300"
                    }
                  >
                    {product.disableProduct ? "Enable" : "Disable"}
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="w-[50px] lg:w-[100px] h-10 m-[5px] border-none rounded-md lg:text-sm cursor-pointer text-white bg-red-500 hover:bg-red-600 transition-colors duration-300"
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
