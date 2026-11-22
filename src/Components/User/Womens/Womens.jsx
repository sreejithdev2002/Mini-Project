import React, { useState, useEffect } from "react";
import ProductPage from "../ProductPage/ProductPage";
import { womens } from "../../../Services/UserApi";
import Loader from "../Loader/Loader";
import Empty from "../Empty/Empty";

function Womens() {

  const [womensData, setWomensData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await womens();
      if (data.status) {
        setWomensData(data.Womens);
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
          <h1>Women's shoes</h1>
        </div>
        {loading ? <Loader /> : (womensData.length ? <ProductPage products={womensData} /> : <Empty message="No products available" />)}
      </main>
    </>
  );
}

export default Womens;
