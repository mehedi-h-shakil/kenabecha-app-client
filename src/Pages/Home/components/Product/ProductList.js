import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const mobiles = useLoaderData();
  return (
    <div className="w-9/12 mx-auto min-h-screen">
      <h2 className="text-4xl font-bold py-10">Details</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {mobiles.map((mobile) => (
          <ProductCard key={mobile._id} mobile={mobile} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
