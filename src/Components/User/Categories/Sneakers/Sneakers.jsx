import React, { useEffect, useState } from "react";
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

  return (
    <>
      <main className="store-section store-section--page">
        <div className="store-section__heading">
          <h1>Sneakers</h1>
        </div>
        {loading ? <Loader /> : (sneakersData.length ? <ProductPage products={sneakersData} /> : <Empty message="No products available" />)}
      </main>
    </>
  );
}

export default Sneakers;
