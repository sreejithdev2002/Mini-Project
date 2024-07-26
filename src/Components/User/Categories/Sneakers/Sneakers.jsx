import React, { useEffect, useState } from "react";
import "./Sneakers.css";
import ProductPage from "../../ProductPage/ProductPage";
import { sneakers } from "../../../../Services/UserApi";
import Loader from "../../Loader/Loader";
import Empty from "../../Empty/Empty";

function Sneakers() {

  const [sneakersData, setSneakersData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await sneakers();
      if (data.status) {
        setSneakersData(data.Sneakers);
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

  if(sneakersData.length === 0){
    return <Empty message="No Product Available"/>
  }

  return (
    <>
      <div className="flex flex-col pb-[50px] pt-[200px] bg-[#f0f0f045] lg:pt-[150px]">
        <div className="ml-[90px] lg:ml-[50px]">
          <h1 className="text-2xl">Sneakers</h1>
        </div>
        {loading ? <Loader /> : <ProductPage products={sneakersData} />}
      </div>
    </>
  );
}

export default Sneakers;
