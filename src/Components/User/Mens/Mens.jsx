import React, { useEffect, useState } from "react";
import "./Mens.css";
import ProductPage from "../ProductPage/ProductPage";
import { mens } from "../../../Services/UserApi";
import Loader from "../Loader/Loader";

function Mens() {
  const [mensData, setMensData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await mens();
      if (data.status) {
        setMensData(data.Mens);
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
      <div className="Mens">
        <div className="MensHeading">
          <h1>Mens Collections</h1>
        </div>
        {loading ? ( // Render spinner if loading is true
          <Loader />
        ) : (
          <ProductPage products={mensData} />
        )}
      </div>
    </>
  );
}

export default Mens;
