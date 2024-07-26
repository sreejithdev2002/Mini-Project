import React from "react";
import "../Footer/Footer.css";
import {Link} from 'react-router-dom';

const Footer = () => {
  return (

    <>
      <div className="flex flex-col bg-[#202633] relative h-auto text-center">
        <div className="grid lg:grid-cols-3 justify-between pt-[20px] px-[50px] pb-[10px]">
          <div className="text-white my-2">
            <Link to="/">
              <h2 className="text-3xl lg:text-start" id="footerBrand">SHOOOZ</h2>
              <h3 className="text-xs lg:text-start">YOUR FOOTWEAR DESTINATION</h3>
              <p className="text-sm font-thin text-gray-300 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae commodi velit sed delectus, nulla doloremque perspiciatis quasi, eos enim aperiam saepe corrupti cupiditate quo illum voluptatum, ipsa dignissimos animi deserunt?</p>
            </Link>
          </div>
          <div className="text-white my-4">
            <ul>
              <Link to="#">
                <li>About Us</li>
              </Link>
              <Link to="#">
                <li>Contact</li>
              </Link>
              <Link to="#">
                <li>Terms & Conditions</li>
              </Link>
              <Link to="#">
                <li>Privacy Policy</li>
              </Link>
            </ul>
          </div>
          <div className="text-white my-4">
            <ul>
              <Link to="/latestarrival">
                <li>Latest Arrivals</li>
              </Link>
              <Link to="/mens">
                <li>Mens</li>
              </Link>
              <Link to="/womens">
                <li>Womens</li>
              </Link>
              <Link to="/categories">
                <li>Categories</li>
              </Link>
              <Link to="/luxury">
                <li>Luxury</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
