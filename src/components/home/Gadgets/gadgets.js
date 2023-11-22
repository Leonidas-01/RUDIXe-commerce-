import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  gdtone,
  gdttwo,
  gdtThree,
  gdtFour,
} from "../../../assets/images/index";

const gadgets = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Top Demands" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="2101"
          img={gdtone}
          productName="Beautiful Shirt For Men"
          price="65.00"
          color="Blank and White"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="2102"
          img={gdttwo}
          productName="Iphone 15Pro Max"
          price="600.00"
          color="Gray and White"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="2103"
          img={gdtThree}
          productName="Samsung Galaxy S23 Ultra"
          price="700.00"
          color="Mixed"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="2104"
          img={gdtFour}
          productName="Party Shirt For Men"
          price="220.00"
          color="Black"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
      </div>
    </div>
  );
};

export default gadgets;
