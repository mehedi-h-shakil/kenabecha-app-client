import React from "react";
import CategoryCard from "./CategoryCard";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Spinner/Spinner";

const Categories = () => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="w-9/12 mx-auto my-20">
      <h2 className="text-3xl font-bold py-10">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories?.map((company, i) => (
          <CategoryCard key={i} company={company} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
