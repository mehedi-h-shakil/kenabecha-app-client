import React from "react";
import { useLoaderData } from "react-router-dom";
import BookModal from "./BookModal";

const ProductDetails = () => {
  const data = useLoaderData();
  const {
    productName,
    resalePrice,
    originalPrice,
    used,
    image,
    location,
    sellerName,
  } = data;
  console.log(data?.date);
  return (
    <div className="w-9/12 mx-auto mt-28 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <img src={image} alt="" className="h-full lg:h-[700px]" />
      </div>
      <div className="mt-20">
        <h2 className="text-5xl font-semibold">Details</h2>
        <div className="mt-16">
          <p className="text-xl mt-">Product Name: {productName}</p>
          <p className="text-xl mt-5">Resale Price: {resalePrice}</p>
          <p className="text-xl mt-5">Original Price: {originalPrice}</p>
          <p className="text-xl mt-5">Used: {used} years</p>
          <p className="text-xl mt-5">Location: {location}</p>
          <p className="text-xl mt-5">Posted Time: {data?.date}</p>
          <h2 className="text-2xl font-semibold mt-5">
            Seller Name: {sellerName}
          </h2>
        </div>
        <label htmlFor="my-modal" className="btn btn-success mt-20">
          Book Now
        </label>
      </div>
      <BookModal data={data} />
    </div>
  );
};

export default ProductDetails;
