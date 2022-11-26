import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ company }) => {
  return (
    <div>
      <Link to={`/categories/${company.name}`}>
        <div className="card card-compact w-[300px] lg:w-96 shadow-xl bg-lime-50">
          <figure>
            <img src={company.image} alt="" className="h-[300px]" />
          </figure>
          <div className="card-body"></div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
