import React, { useEffect, useState } from "react";
import "./FeaturedProducts.css";
import ProductPage from "../../ProductPage/ProductPage";
import { featuredProducts } from "../../../../Services/UserApi";
import Loader from "../../Loader/Loader";

function FeaturedProducts() {
  const [featuredData, setFeaturedData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await featuredProducts();
      if (data.status) {
        setFeaturedData(data.FeaturedProducts);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-5 bg-[#fafafae6]">
        <h2 className="text-3xl">Featured Products</h2>
        <hr id="hr" />
        <div className="grid grid-cols-1 gap-y-2.5 py-5 lg:custom-grid">
          {loading ? <Loader /> : <ProductPage products={featuredData} />}
        </div>
      </div>
    </>
  );
}

export default FeaturedProducts;
