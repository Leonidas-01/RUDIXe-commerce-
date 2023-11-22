import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  snkOne,
  snkTwo,
  snkThree,
  snkFour,
  snkFive,
  snkSix,
  snkSeven,
  snkEight,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const sneakers = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="Sneakers" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="200001"
            img={snkOne}
            productName="Nike Sneakers [both sex]"
            price="100"
            color="Black and white"
            badge={true}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
        <div className="px-2">
          <Product
            _id="200002"
            img={snkTwo}
            productName="Nike Fashion white"
            price="150.00"
            color="White"
            badge={true}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
        <div className="px-2">
          <Product
            _id="200003"
            img={snkThree}
            productName="Nike Air High Top"
            price="120.00"
            color="Red and black"
            badge={true}
            des="A 14-inch version of the 2023 MacBook Pro which comes in three iterations. The M2 Pro chip, and the two other retail. Properties 14 inch MacBook Pro Laptop.
            M2 Pro 32GB RAM, 512GB 2023, 12-core CPU and 19-core GPU, 1TB SSD."
          />
        </div>
        <div className="px-2">
          <Product
            _id="200004"
            img={snkFour}
            productName="Nike Joy Ride"
            price="170.00"
            color="Mixed"
            badge={false}
            des="Common Party Shirt Wears for Men, Printed Designer Shirt Available in different Colors and styles you would Love. It is one of Our New Arrival that has been selling alot in the market. Buy Now and get the best Quality."
          />
        </div>
        <div className="px-2">
          <Product
            _id="200005"
            img={snkFive}
            productName="Nike Air Max Plus Men's Shoes"
            price="180.00"
            color="Mixed"
            badge={false}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
        <div className="px-2">
          <Product
            _id="200006"
            img={snkSix}
            productName="Alpha DragonScale New"
            price="180.00"
            color="Mixed"
            badge={false}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
        <div className="px-2">
          <Product
            _id="200007"
            img={snkSeven}
            productName="Adidas x Balenciaga Triple-S Collab"
            price="180.00"
            color="Mixed"
            badge={false}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
        <div className="px-2">
          <Product
            _id="200006"
            img={snkEight}
            productName="Carnuoc Dragon Scale Sneakers"
            price="180.00"
            color="Mixed"
            badge={false}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
      </Slider>
    </div>
  );
};

export default sneakers;
