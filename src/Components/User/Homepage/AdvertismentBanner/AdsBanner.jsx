import React from 'react';
import './AdsBanner.css';
import AdsBannerImg from '../../../../Assets/Images/AdsBanner1.png';

function AdsBanner() {
  return (
    <>
      <div className="adsBanner">
        <img src={AdsBannerImg} alt="" />
      </div>
    </>
  )
}

export default AdsBanner
