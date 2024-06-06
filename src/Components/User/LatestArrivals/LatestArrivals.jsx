// import React, {useEffect, useState} from "react";
// import "./LatestArrivals.css";
// import ProductPage from "../ProductPage/ProductPage";
// import { latestArrivals } from "../../../Services/UserApi";

// function LatestArrivals() {

//   const [latestarrival, setLatestarrival] = useState([]);
  
//   const fetchData = async () => {
//     const {data} = await latestArrivals();
//     if(data.status) {
//       setLatestarrival(data.LatestArrival);
//     } else {
//       console.log("error");
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <>
//       <div className="latestArrival">
//         <div className="latestArrivalHeading">
//           <h1>Latest Arrivals</h1>
//         </div>
//         <ProductPage products={latestarrival} />
//       </div>
//     </>
//   );
// }

// export default LatestArrivals;

import React, { useEffect, useState } from "react";
import "./LatestArrivals.css";
import ProductPage from "../ProductPage/ProductPage";
import { latestArrivals } from "../../../Services/UserApi";
import Loader from "../Loader/Loader";
import Empty from '../Empty/Empty';

function LatestArrivals() {
  const [latestarrival, setLatestarrival] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading

  const fetchData = async () => {
    try {
      const { data } = await latestArrivals();
      if (data.status) {
        setLatestarrival(data.LatestArrival);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      // Set loading to false after a delay of 1.5 seconds
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(latestarrival.length === 0){
    return <Empty message="No Products Available" />
  }

  return (
    <>
      <div className="latestArrival">
        <div className="latestArrivalHeading">
          <h1>Latest Arrivals</h1>
        </div>
        {loading ? ( // Render spinner if loading is true
          <Loader/>
        ) : (
          <ProductPage products={latestarrival} />
        )}
      </div>
    </>
  );
}

export default LatestArrivals;
