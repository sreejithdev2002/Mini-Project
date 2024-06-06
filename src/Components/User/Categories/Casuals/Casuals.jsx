import React, { useState, useEffect } from "react";
import "./Casuals.css";
import ProductPage from "../../ProductPage/ProductPage";
import { casuals } from "../../../../Services/UserApi";
import Loader from "../../Loader/Loader";
import Empty from "../../Empty/Empty";

function Casuals() {
  // const casuals = ShoesData.shoes.filter(shoe => shoe.category === 'Casuals')

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
      <div className="casuals">
        <div className="casualsHeading">
          <h1>Casuals</h1>
        </div>
        {loading ? <Loader /> : <ProductPage products={casualsData} />}
      </div>
    </>
  );
}

export default Casuals;
