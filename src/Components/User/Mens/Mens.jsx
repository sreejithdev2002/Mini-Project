import React, { useEffect, useState } from "react";
import "./Mens.css";
import ProductPage from "../ProductPage/ProductPage";
import { mens } from "../../../Services/UserApi";

function Mens() {
  // const mens = ShoesData.shoes.filter(shoe => shoe.gender === 'Men');
  const [mensData, setMensData] = useState([]);

  const fetchData = async () => {
    const {data} = await mens();
    if(data.status) {
      setMensData(data.Mens);
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="Mens">
        <div className="MensHeading">
          <h1>Mens Collections</h1>
        </div>
        <ProductPage products={mensData}/>
      </div>
    </>
  );
}

export default Mens;
