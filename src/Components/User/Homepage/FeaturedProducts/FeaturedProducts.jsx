import React from "react";
import "./FeaturedProducts.css";
import ProductPage from "../../ProductPage/ProductPage";
import ShoesData from "../../../../Data/Shoes.json";

function FeaturedProducts() {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const featured = shuffleArray(ShoesData.shoes).slice(0, 4);

  return (
    <>
      <div className="featuredProducts">
        <h2 className="featuredHeading">Featured Products</h2>
        <hr id="hr" />
        <div className="featuredGrid">
          <ProductPage products={featured} />
        </div>
      </div>
    </>
  );
}

export default FeaturedProducts;
