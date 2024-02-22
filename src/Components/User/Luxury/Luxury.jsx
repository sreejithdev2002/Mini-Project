import React from 'react';
import './Luxury.css';

function Luxury() {
  return (
    <>
      <div className="luxury">
        <div className="luxuryHeading">
          <h1>Luxury Collection</h1>
        </div>
        <div className="luxuryGrids">
        <div className="luxuryGrid">
            <div className="luxuryProductImg"></div>
            <div className="luxuryProductDetails">
              <h2>Product Name</h2>
              <h3>$290.00</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quaerat quas repellat, eum adipisci corrupti odit nesciunt
                expedita laboriosam unde velit officiis suscipit quam, non
                veritatis beatae dolorem explicabo! Enim, porro?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Luxury
