import React, { useEffect, useState } from "react";
import "./Sandals.css";
import ProductPage from "../../ProductPage/ProductPage";
import { sandals } from "../../../../Services/UserApi";
import Loader from "../../Loader/Loader";
import Empty from "../../Empty/Empty";

function Sandals() {
  // const sandals = ShoesData.shoes.filter(shoe => shoe.category === 'Sandals');

  const [sandalsData, setSandalsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await sandals();
      if (data.status) {
        setSandalsData(data.Sandals);
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

  if(sandalsData.length === 0){
    return <Empty message="No Product Available"/>
  }

  return (
    <>
      <div className="sandals">
        <div className="sandalsHeading">
          <h1>Sandals</h1>
        </div>
        {loading ? <Loader /> : <ProductPage products={sandalsData} />}
      </div>
    </>
  );
}

export default Sandals;
