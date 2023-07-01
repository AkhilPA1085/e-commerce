import Image from "next/image";
import React from "react";
import Button from "./Button";

const CategoryCard = ({cols}) => {
  return (
    <div className={`relative ${cols ? `lg:w-1/${cols}` : `lg:w-full`}`}>
      <Image
        width={500}
        height={500}
        className="object-cover object-center rounded relative w-full h-screen"
        alt="hero"
        src="https://dummyimage.com/720x600"
      />

      <Button className={"absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"}>category</Button>
    </div>
  );
};

export default CategoryCard;
