import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ mobile }) => {
  const {
    _id,
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <figure>
            <img src={image} alt="Movie" className="" />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title">{productName}</h2>
          <p>ReSale Price: ${resalePrice}</p>
          <p>Original Price: ${originalPrice}</p>
          <p>Used: {used} years</p>
          <p>Posted: </p>
          <p>Location: {location}</p>
          <h2 className="font-semibold">Sellers Name: {sellerName}</h2>
          <div className="flex gap-5">
            <div className="card-actions ">
              <Link to={`/mobile/${_id}`}>
                <button className="btn btn-primary">Details</button>
              </Link>
            </div>
            <div className="card-actions ">
              <Link to={`/dashboard/wishlist/${_id}`}>
                <button className="btn btn-primary">WishList</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
