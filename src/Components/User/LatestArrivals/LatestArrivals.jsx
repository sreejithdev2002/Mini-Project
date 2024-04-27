import React, {useEffect, useState} from "react";
import "./LatestArrivals.css";
import ProductPage from "../ProductPage/ProductPage";
import { latestArrivals } from "../../../Services/UserApi";

function LatestArrivals() {

  const [latestarrival, setLatestarrival] = useState([]);
  
  const fetchData = async () => {
    const {data} = await latestArrivals();
    if(data.status) {
      setLatestarrival(data.LatestArrival);
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="latestArrival">
        <div className="latestArrivalHeading">
          <h1>Latest Arrivals</h1>
        </div>
        <ProductPage products={latestarrival} />
      </div>
    </>
  );
}

export default LatestArrivals;