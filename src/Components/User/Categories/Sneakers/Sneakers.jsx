import React, { useEffect, useState } from "react";
import "./Sneakers.css";
import ProductPage from "../../ProductPage/ProductPage";
import { sneakers } from "../../../../Services/UserApi";
import Loader from "../../Loader/Loader";

function Sneakers() {
  // const sneakers = ShoesData.shoes.filter(shoe => shoe.category === 'Sneakers');

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
      <div className="sneakers">
        <div className="sneakersHeading">
          <h1>Sneakers</h1>
        </div>
        {loading ? <Loader /> : <ProductPage products={sneakersData} />}
      </div>
    </>
  );
}

export default Sneakers;
