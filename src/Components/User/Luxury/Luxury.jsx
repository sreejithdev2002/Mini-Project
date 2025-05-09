import React, { useEffect, useState } from "react";
import "./Luxury.css";
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


  if(luxuryData.length === 0){
    return <Empty message="No Product Available"/>
  }

  return (
    <>
      <div className="flex flex-col pb-[50px] pt-[200px] bg-[#f0f0f045] lg:pt-[150px]">
        <div className="ml-[90px] lg:ml-[50px]">
          <h1 className="text-2xl">Luxury Collection</h1>
        </div>
        {loading ? <Loader /> : <ProductPage products={luxuryData} />}
      </div>
    </>
  );
}

export default Luxury;
