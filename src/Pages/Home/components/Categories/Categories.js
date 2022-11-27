import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import Axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/categories").then((res) =>
      setCategories(res.data)
    );
  }, []);

  // if (isLoading) {
  //   return <Spinner />;
  // }
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
