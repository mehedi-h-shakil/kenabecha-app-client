import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Home/components/Spinner/Spinner";
import toast from "react-hot-toast";

const MyProducts = () => {
  const date = new Date();
  const { user } = useContext(AuthContext);
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/myProducts/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (productId) => {
    const id = productId;
    // console.log(id);
    fetch(`http://localhost:5000/myProducts`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Item Deleted");
        refetch();
      });
  };

  // const { data: ads } = useQuery({
  //   queryKey: ["ads"],
  //   queryFn: async (id) => {
  //     const res = await fetch(`http://localhost:5000/advertise`);
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  // console.log(ads);

  const handleAds = (id) => {
    const adsData = {
      id,
      date: date,
    };
    fetch("http://localhost:5000/advertise", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(adsData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Advertisement Successfull");
      });
  };

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
                <td>
                  {!product?.paid && <span>Available</span>}
                  {product?.paid && (
                    <span className="text-green-500">Sold</span>
                  )}
                </td>
                <td>
                  {/* {ads?.map((ad) => console.log(ad.result))} */}

                  {!product?.advertise && !product?.paid && (
                    <button
                      onClick={() => handleAds(product?._id)}
                      className="btn btn-success"
                    >
                      Add
                    </button>
                  )}

                  {product?.advertise && (
                    <span className="text-green-500">Advertised</span>
                  )}

                  {product.paid && <span className="text-green-500">Sold</span>}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(product?._id)}
                    className="btn"
                  >
                    Delete
                  </button>
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
