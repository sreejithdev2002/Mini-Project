import React, { useState, useEffect } from "react";
import "./Womens.css";
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

  if(womensData.length === 0){
    return <Empty message="No Product Available"/>
  }

  return (
    <>
      <div className="flex flex-col pb-[50px] pt-[200px] bg-[#f0f0f045] lg:pt-[150px]">
        <div className="ml-[90px] lg:ml-[50px]">
          <h1 className="text-2xl">Womens Collections</h1>
        </div>
        {loading ? <Loader /> : <ProductPage products={womensData} />}
      </div>
    </>
  );
}

export default Womens;
