import React from "react";

const ProductCard = ({ mobile }) => {
  const {
    productName,
    resalePrice,
    originalPrice,
    used,
    image,
    location,
    sellerName,
  } = mobile;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Movie" className="w-1/2" />
      </figure>
      <div className="card-body w-1/2">
        <h2 className="card-title">{productName}</h2>
        <p>ReSale Price: ${resalePrice}</p>
        <p>Original Price: ${originalPrice}</p>
        <p>Used: {used} years</p>
        <p>Posted: </p>
        <p>Location: {location}</p>
        <h2 className="font-semibold">Sellers Name: {sellerName}</h2>
        <div className="card-actions ">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
