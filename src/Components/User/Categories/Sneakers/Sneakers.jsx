import React, { useEffect, useState } from 'react';
import './Sneakers.css';
import ProductPage from '../../ProductPage/ProductPage';
import { sneakers } from '../../../../Services/UserApi';

function Sneakers() {
    // const sneakers = ShoesData.shoes.filter(shoe => shoe.category === 'Sneakers');

    const [sneakersData, setSneakersData] = useState([]);

    const fetchData = async () => {
      const {data} = await sneakers();
      if(data.status) {
        setSneakersData(data.Sneakers);
      } else {
        console.log("error");
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
        <ProductPage products={sneakersData}/>
      </div>
    </>
  )
}

export default Sneakers
