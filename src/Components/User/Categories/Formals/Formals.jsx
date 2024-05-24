import React, { useState, useEffect } from "react";
import "./Formals.css";
import ProductPage from "../../ProductPage/ProductPage";
import { formals } from "../../../../Services/UserApi";
import Loader from "../../Loader/Loader";

function Formals() {
  // const formals = ShoesData.shoes.filter(shoe => shoe.category === 'Formals');

  const [formalsData, setFormalsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await formals();
      if (data.status) {
        setFormalsData(data.Formals);
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
      <div className="formals">
        <div className="formalsHeading">
          <h1>Formals</h1>
        </div>
        {loading ? <Loader /> : <ProductPage products={formalsData} />}
      </div>
    </>
  );
}

export default Formals;
