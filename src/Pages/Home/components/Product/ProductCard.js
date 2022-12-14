import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";

const ProductCard = ({ mobile }) => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    productName,
    resalePrice,
    originalPrice,
    used,
    image,
    location,
    sellerName,
    paid,
  } = mobile;

  const handleWishList = (id) => {
    const wishData = {
      user: user?.email,
      id,
    };
    fetch("https://kenabecha-server.vercel.app/wishlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishData),
    })
      .then((res) => res.json())
      .then((data) => toast.success("Added to Wishlist"));
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <figure>
            <img src={image} className="h-[500px] p-5" alt="Movie" />
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
              {!paid && (
                <Link to={`/mobile/${_id}`}>
                  <button className="btn btn-primary">Details</button>
                </Link>
              )}
              {paid && <span className="btn btn-success">Sold</span>}
            </div>
            <div className="card-actions ">
              {!paid && (
                <button
                  onClick={() => handleWishList(_id)}
                  className="btn btn-primary"
                >
                  WishList
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
