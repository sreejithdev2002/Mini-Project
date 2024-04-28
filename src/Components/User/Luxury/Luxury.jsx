import React, { useEffect, useState } from "react";
import "./Luxury.css";
import ProductPage from "../ProductPage/ProductPage";
import { luxury } from "../../../Services/UserApi";

function Luxury() {
  // const luxury = ShoesData.shoes.filter(shoe => shoe.isLuxury === true);

  const [luxuryData, setLuxuryData] = useState([]);

  const fetchData = async () => {
    const { data } = await luxury();
    if (data.status) {
      setLuxuryData(data.Luxury);
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="luxury">
        <div className="luxuryHeading">
          <h1>Luxury Collection</h1>
        </div>
        <ProductPage products={luxuryData} />
      </div>
    </>
  );
}

export default Luxury;
