import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";


const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">RUDIX</span>{" "}
          is one of the world's leading ecommerce brands and is internationally
          recognized for celebrating the essence of classic Worldwide cool
          looking style. 
          
        </h1>
        <h1 className="font-bold text-lg text-primeColor text-center top-30">The Power Of RUDIX Shop</h1>
        <p className="text-center">RUDIX Shop integrates with all the relevant sales, marketing, and finance apps within the RUDIX Shop, empowering
          you to scale your buisness operations as your sales multiply
        </p>
        <div style={{display: "flex", width: "500px", padding: "20px"}}>
          <img src="./imag/slideone.jpeg" alt=""/>
          <img src="./imag/slidetwo.jpeg" alt=""/>
        </div>
        <div style={{paddingBottom: "20px"}}>
        <h1 style={{fontSize: "20px", paddingBottom: "10px"}} className="font-bold text-primeColor text-lg">Admired and Acclaimed</h1>
        <p>I started my buisness by making and selling skincare and haircare product
        on social media, but managing orders manually took up a lot of time. With RUDIX
        Shop, it took me just three weeks to launch a fully furnuished ecommerce store without
        having to code. Now that i had more time to work on the other strategic aspects of my buisness.
        <span style={{color: "red"}} className="font-semibold text-lg"> My revenue grew by 50%. Aishat </span>
        CEO, Precious Skincare
        </p>
        </div>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
