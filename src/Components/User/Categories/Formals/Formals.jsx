import React, { useState, useEffect } from "react";
import ProductPage from "../../ProductPage/ProductPage";
import { formals } from "../../../../Services/UserApi";
import Loader from "../../Loader/Loader";
import Empty from "../../Empty/Empty";

function Formals() {

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
      <main className="store-section store-section--page">
        <div className="store-section__heading">
          <h1>Formals</h1>
        </div>
        {loading ? <Loader /> : (formalsData.length ? <ProductPage products={formalsData} /> : <Empty message="No products available" />)}
      </main>
    </>
  );
}

export default Formals;
