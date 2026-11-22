import React, { useEffect, useState } from "react";
import ProductPage from "../../ProductPage/ProductPage";
import { sandals } from "../../../../Services/UserApi";
import Loader from "../../Loader/Loader";
import Empty from "../../Empty/Empty";

function Sandals() {

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

  return (
    <>
      <main className="store-section store-section--page">
        <div className="store-section__heading">
          <h1>Sandals</h1>
        </div>
        {loading ? <Loader /> : (sandalsData.length ? <ProductPage products={sandalsData} /> : <Empty message="No products available" />)}
      </main>
    </>
  );
}

export default Sandals;
