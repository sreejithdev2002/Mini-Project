import React, { useState, useEffect } from "react";
import "./Womens.css";
import ProductPage from "../ProductPage/ProductPage";
import { womens } from "../../../Services/UserApi";
import Loader from "../Loader/Loader";
import Empty from "../Empty/Empty";

function Womens() {
  // const womens = ShoesData.shoes.filter(shoe => shoe.gender === 'Women');

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
      <div className="Womens">
        <div className="MensHeading">
          <h1>Womens Collections</h1>
        </div>
        {loading ? <Loader /> : <ProductPage products={womensData} />}
      </div>
    </>
  );
}

export default Womens;
