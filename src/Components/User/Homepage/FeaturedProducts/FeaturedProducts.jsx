import React, { useEffect, useState } from "react";
import "./FeaturedProducts.css";
import ProductPage from "../../ProductPage/ProductPage";
import { featuredProducts } from "../../../../Services/UserApi";

function FeaturedProducts() {

  const [featuredData, setFeaturedData] = useState([]);

  const fetchData = async() => {
    const {data} = await featuredProducts();
    if(data.status) {
      setFeaturedData(data.FeaturedProducts);
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="featuredProducts">
        <h2 className="featuredHeading">Featured Products</h2>
        <hr id="hr" />
        <div className="featuredGrid">
          <ProductPage products={featuredData} />
        </div>
      </div>
    </>
  );
}

export default FeaturedProducts;
