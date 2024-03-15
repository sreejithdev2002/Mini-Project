import React from "react";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import ShoesData from '../../../Data/Shoes.json';

function SingleProduct() {
  const { productId } = useParams();
  const product = ShoesData.shoes.find(shoe => shoe.id === parseInt(productId));
  return (
    <>
      <div className="singleProduct">
        <div className="sinPrdTopSection">
          <div className="sinPrdImgSection">
            <div className="sinPrdImg" id="sinPrdImg"></div>
            {/* <div className="sinPrdImgSelection">
              <div className="sinPrdImg"></div>
              <div className="sinPrdImg"></div>
              <div className="sinPrdImg"></div>
              <div className="sinPrdImg"></div>
            </div> */}
          </div>
          <div className="sinPrdDetailSection">
            <div className="sinPrdDetailsName">
              <h1>{product.name}</h1>
              <h3>{product.brand}</h3>
              <p>
                {product.description}
              </p>
              {/* <div className="sinPrdDetailsSizes">
                <div className="sinPrdSizes">6</div>
                <div className="sinPrdSizes">7</div>
                <div className="sinPrdSizes">8</div>
                <div className="sinPrdSizes">9</div>
                <div className="sinPrdSizes">10</div>
              </div> */}
              <div className="sinPrdButtons">
                <button className="sinPrdBtn" id="sinPrdBtn1">Add to Cart</button>
                <button className="sinPrdBtn" id="sinPrdBtn2">Buy Now</button>
              </div>
            </div>
            <div className="sinPrdDetailsPrice">
              <h2>₹{product.price}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
