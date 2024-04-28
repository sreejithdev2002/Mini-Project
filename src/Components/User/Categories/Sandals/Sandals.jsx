import React, { useEffect, useState } from 'react';
import './Sandals.css';
import ProductPage from '../../ProductPage/ProductPage';
import { sandals } from '../../../../Services/UserApi';

function Sandals() {
    // const sandals = ShoesData.shoes.filter(shoe => shoe.category === 'Sandals');

    const [sandalsData, setSandalsData] = useState([]);

    const fetchData = async () => {
      const {data} = await sandals();
      if(data.status) {
        setSandalsData(data.Sandals);
      } else {
        console.log("error");
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);

  return (
    <>
      <div className="sandals">
        <div className="sandalsHeading">
            <h1>Sandals</h1>
        </div>
        <ProductPage products={sandalsData}/>
      </div>
    </>
  )
}

export default Sandals
