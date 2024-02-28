import React from "react";
import "./LatestArrivals.css";
import ProductPage from "../ProductPage/ProductPage";
import ShoesData from '../../../Data/Shoes.json';

function LatestArrivals() {
  const latestArrivals = ShoesData.shoes.sort((a,b) => new Date(b.dateAdded) - new Date(a.dateAdded));

  return (
    <>
      <div className="latestArrival">
        <div className="latestArrivalHeading">
          <h1>Latest Arrivals</h1>
        </div>
        <ProductPage products={latestArrivals} />
      </div>
    </>
  );
}

export default LatestArrivals;
 