import React, { useEffect, useState } from "react";
import ProductPage from "../ProductPage/ProductPage";
import { luxury } from "../../../Services/UserApi";
import Loader from "../Loader/Loader";
import Empty from "../Empty/Empty";
// import useDataFetch from "../../../hooks/useDataFetch";

function Luxury() {
  const [luxuryData, setLuxuryData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await luxury();
      if (data.status) {
        setLuxuryData(data.Luxury);
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
          <h1>Luxury Collection</h1>
        </div>
        {loading ? <Loader /> : (luxuryData.length ? <ProductPage products={luxuryData} /> : <Empty message="No products available" />)}
      </main>
    </>
  );
}

export default Luxury;
