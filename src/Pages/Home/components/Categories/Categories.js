import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const companies = [
    {
      name: "Apple",
      image:
        "https://apple-store.ifuture.co.in/wp-content/uploads/2022/05/About-Apple-Logo.jpg",
    },
    {
      name: "Samsung",
      image:
        "https://www.dailypioneer.com/uploads/2019/story/images/big/samsung-electronics-flags-56--fall-in-q2-operating-profit-2019-07-05.jpg",
    },
    {
      name: "Xiaomi",
      image:
        "https://www.gizmochina.com/wp-content/uploads/2021/12/xiaomi-logo.jpeg",
    },
  ];
  return (
    <div className="w-9/12 mx-auto my-20">
      <h2 className="text-3xl font-bold py-10">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {companies.map((company, i) => (
          <CategoryCard key={i} company={company} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
