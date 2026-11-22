import React, { useEffect, useState } from "react";
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

  return (
    <>
      <main className="store-section store-section--page">
        <div className="store-section__heading">
          <h1>Men's shoes</h1>
        </div>
        {loading ? <Loader /> : (mensData.length ? <ProductPage products={mensData} /> : <Empty message="No products available" />)}
      </main>
    </>
  );
}

export default Mens;
