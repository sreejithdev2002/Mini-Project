import React, { useEffect, useState } from "react";
import "./LatestArrivals.css";
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

  if (latestarrival.length === 0) {
    return <Empty message="No Products Available" />;
  }

  return (
    <>
      <div className="flex flex-col pb-[50px] pt-[200px] bg-[#f0f0f045] lg:pt-[150px]">
        <div className="ml-[90px] lg:ml-[50px]">
          <h1 className="text-2xl">Latest Arrivals</h1>
        </div>
        {loading ? ( 
          <Loader />
        ) : (
          <ProductPage products={latestarrival} />
        )}
      </div>
    </>
  );
}

export default LatestArrivals;
