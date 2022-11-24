import React, { useEffect, useState } from "react";

const CategoryCard = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {}, []);
  return (
    <div className="card card-compact w-[300px] lg:w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default CategoryCard;
