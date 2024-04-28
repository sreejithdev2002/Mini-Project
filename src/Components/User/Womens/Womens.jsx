import React, { useState, useEffect } from "react";
import "./Womens.css";
import ProductPage from "../ProductPage/ProductPage";
import { womens } from "../../../Services/UserApi";

function Womens() {
  // const womens = ShoesData.shoes.filter(shoe => shoe.gender === 'Women');

  const [womensData, setWomensData] = useState([]);

  const fetchData = async () => {
    const { data } = await womens();
    if (data.status) {
      setWomensData(data.Womens);
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="Womens">
        <div className="MensHeading">
          <h1>Womens Collections</h1>
        </div>
        <ProductPage products={womensData} />
      </div>
    </>
  );
}

export default Womens;
