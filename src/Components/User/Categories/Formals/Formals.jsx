import React, { useState, useEffect } from "react";
import "./Formals.css";
import ProductPage from "../../ProductPage/ProductPage";
import { formals } from "../../../../Services/UserApi";

function Formals() {
  // const formals = ShoesData.shoes.filter(shoe => shoe.category === 'Formals');

  const [formalsData, setFormalsData] = useState([]);

  const fetchData = async () => {
    const { data } = await formals();
    if (data.status) {
      setFormalsData(data.Formals);
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="formals">
        <div className="formalsHeading">
          <h1>Formals</h1>
        </div>
        <ProductPage products={formalsData} />
      </div>
    </>
  );
}

export default Formals;
