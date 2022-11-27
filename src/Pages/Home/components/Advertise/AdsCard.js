import React from "react";
import { GoVerified } from "react-icons/go";

const AdsCard = ({ ad, i }) => {
  // console.log(ad.result);
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
      <img
        src={ad?.result.image}
        alt=""
        className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
          {ad?.result.company}
        </span>
        <h2 className="text-xl font-semibold tracking-wide">
          {ad?.result.productName}
        </h2>
      </div>
      <p className="dark:text-gray-100 py-1">Price: {ad?.result.resalePrice}</p>
      <p className="dark:text-gray-100 py-1">Location: {ad?.result.location}</p>
      <p className="dark:text-gray-100 text-xl font-semibold py-2 flex items-center gap-4">
        Seller: {ad?.result.sellerName}{" "}
        <span>
          {ad?.result.verified && <GoVerified className="text-blue-500" />}
        </span>
      </p>
    </div>
  );
};

export default AdsCard;
