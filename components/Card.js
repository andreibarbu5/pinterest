import React from "react";
import Image from "next/image";

const Card = ({ image, user }) => {
  return (
    <div className="">
      <div className="max-w-[14rem] md:max-w-[15rem] lg:max-w-[14.2rem] flex   ">
        <Image src={image} className="    rounded-[1rem]  z-0 " />

        <div className="absolute hidden hover:block   z-20">hi</div>
      </div>
    </div>
  );
};

export default Card;
