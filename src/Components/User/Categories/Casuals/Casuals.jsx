import React, { useState, useEffect } from "react";
import ProductPage from "../../ProductPage/ProductPage";
import { casuals } from "../../../../Services/UserApi";
import Loader from "../../Loader/Loader";
import Empty from "../../Empty/Empty";

function Casuals() {

  const [casualsData, setCasualsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await casuals();
      if (data.status) {
        setCasualsData(data.Casuals);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
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
          <h1>Casuals</h1>
        </div>
        {loading ? <Loader /> : (casualsData.length ? <ProductPage products={casualsData} /> : <Empty message="No products available" />)}
      </main>
    </>
  );
}

export default Casuals;
