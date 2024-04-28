import React, { useState, useEffect } from "react";
import "./Casuals.css";
import ProductPage from "../../ProductPage/ProductPage";
import { casuals } from "../../../../Services/UserApi";

function Casuals() {
  // const casuals = ShoesData.shoes.filter(shoe => shoe.category === 'Casuals')

  const [casualsData, setCasualsData] = useState([]);

  const fetchData = async () => {
    const { data } = await casuals();
    if (data.status) {
      setCasualsData(data.Casuals);
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="casuals">
        <div className="casualsHeading">
          <h1>Casuals</h1>
        </div>
        <ProductPage products={casualsData} />
      </div>
    </>
  );
}

export default Casuals;
