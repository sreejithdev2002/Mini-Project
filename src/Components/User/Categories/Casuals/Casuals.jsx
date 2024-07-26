import React, { useState, useEffect } from "react";
import "./Casuals.css";
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

  if(casualsData.length === 0){
    return <Empty message="No Product Available"/>
  }

  return (
    <>
      <div className="flex flex-col pb-[50px] pt-[200px] bg-[#f0f0f045] lg:pt-[150px]">
        <div className="ml-[90px] lg:ml-[50px]">
          <h1 className="text-2xl">Casuals</h1>
        </div>
        {loading ? <Loader /> : <ProductPage products={casualsData} />}
      </div>
    </>
  );
}

export default Casuals;
