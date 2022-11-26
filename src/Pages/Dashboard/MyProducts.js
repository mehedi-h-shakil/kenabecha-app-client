import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Home/components/Spinner/Spinner";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/myProducts/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold">All Posted Products</h2>
      <div className="overflow-x-auto mt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Company</th>
              <th>Product</th>
              <th>Status</th>
              <th>Advertise</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => (
              <tr className="hover" key={product._id}>
                <th>{index + 1}</th>
                <td>{product?.company}</td>
                <td>{product?.productName}</td>
                <td>Available</td>
                <td>
                  <button className="btn btn-success">Add</button>
                </td>
                <td>
                  <button className="btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
