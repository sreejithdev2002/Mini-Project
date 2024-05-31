import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../../Services/UserApi";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const { data } = await getProductDetails(id);
        if (data.status) {
          setProduct(data.Product);
          setLoading(false);
        } else {
          console.log("error");
        }
      } catch (error) {
        setError(error.response.data.message);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="singleProduct">
        <div className="sinPrdTopSection">
          <div className="sinPrdImgSection">
            <div className="sinPrdImg" id="sinPrdImg"></div>
          </div>
          <div className="sinPrdDetailSection">
            <div className="sinPrdDetailsName">
              <h1>{product.name}</h1>
              <h3>{product.brand}</h3>
              <p>{product.description}</p>
              <div className="sinPrdButtons">
                <button className="sinPrdBtn" id="sinPrdBtn1">
                  Add to Cart
                </button>
                <button className="sinPrdBtn" id="sinPrdBtn2">
                  Buy Now
                </button>
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
