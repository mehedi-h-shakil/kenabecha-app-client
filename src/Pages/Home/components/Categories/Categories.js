import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <div className="w-9/12 mx-auto my-20">
      <h2 className="text-3xl font-bold py-10">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
};

export default Categories;
