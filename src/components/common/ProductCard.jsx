import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({product}) => {
    const attributes = product?.attributes;
    const image = attributes?.Image?.data?.attributes?.url
  return (
    <Link href={`/products/${attributes?.slug}`} className="w-full">
      <div className="block relative h-48 rounded overflow-hidden">
        <Image
          width={500}
          height={500}
          alt="ecommerce"
          className="object-contain object-center w-full h-full block hover:scale-110 transition-transform duration-300"
          src={image? process.env.NEXT_PUBLIC_API_URL + image : "https://dummyimage.com/720x400"}
        />
      </div>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
          {attributes?.category}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium capitalize">
        {attributes?.title}
        </h2>
        <p className="mt-1">${attributes?.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
