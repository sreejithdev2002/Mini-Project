import React, { useEffect, useState } from "react";
import ProductPage from "../ProductPage/ProductPage";
import { latestArrivals } from "../../../Services/UserApi";
import Loader from "../Loader/Loader";
import Empty from "../Empty/Empty";

function LatestArrivals() {
  const [latestarrival, setLatestarrival] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await latestArrivals();
      if (data.status) {
        setLatestarrival(data.LatestArrival);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
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
          <h1>Latest Arrivals</h1>
        </div>
        {loading ? <Loader /> : (latestarrival.length ? <ProductPage products={latestarrival} /> : <Empty message="No products available" />)}
      </main>
    </>
  );
}

export default LatestArrivals;
