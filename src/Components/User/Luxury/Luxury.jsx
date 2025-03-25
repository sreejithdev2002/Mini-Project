import React from "react";
import "./Luxury.css";
import ProductPage from "../ProductPage/ProductPage";
// import { luxury } from "../../../Services/UserApi";
import Loader from "../Loader/Loader";
import Empty from "../Empty/Empty";
import useDataFetch from "../../../hooks/useDataFetch";

function Luxury() {
  

const {state:photos} = useDataFetch("photos");
const {state:posts} = useDataFetch("posts");
console.log("photos:", photos);
console.log("posts:", posts);


  // if(luxuryData.length === 0){
  //   return <Empty message="No Product Available"/>
  // }

  return (
    <>
      <div className="flex flex-col pb-[50px] pt-[200px] bg-[#f0f0f045] lg:pt-[150px]">
        {/* <div className="ml-[90px] lg:ml-[50px]">
          <h1 className="text-2xl">Luxury Collection</h1>
        </div>
        {loading ? <Loader /> : <ProductPage products={luxuryData} />} */}
      </div>
    </>
  );
}

export default Luxury;
