import React, { useEffect, useState } from "react";
import "./Mens.css";
import ProductPage from "../ProductPage/ProductPage";
import { mens } from "../../../Services/UserApi";
import Loader from "../Loader/Loader";
import Empty from "../Empty/Empty";

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

  if(mensData.length === 0){
    return <Empty message="No Product Available"/>
  }

  return (
    <>
      <div className="flex flex-col pb-[50px] pt-[200px] bg-[#f0f0f045] lg:pt-[150px]">
        <div className="ml-[90px] lg:ml-[50px]">
          <h1 className="text-2xl">Mens Collections</h1>
        </div>
        {loading ? <Loader /> : <ProductPage products={mensData} />}
      </div>
    </>
  );
}

export default Mens;
