import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const WishList = () => {
  const { user } = useContext(AuthContext);
  const { data: wishlists, refetch } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const res = await fetch(
        `https://kenabecha-server.vercel.app/wishlist/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  // console.log(wishlists.result);

  const handleDelete = (id) => {
    // console.log(id);
    fetch("https://kenabecha-server.vercel.app/wishlist", {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.success("Item Deleted");
        refetch();
      });
  };

  return (
    <div>
      <h2 className="text-3xl mb-4">Wishlist</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {wishlists?.map((wish, index) => (
              <tr className="hover" key={wish._id}>
                <th>{index + 1}</th>
                <td>{wish.result?.productName}</td>
                <td>
                  <img src={wish?.result?.image} className="w-16" alt="" />
                </td>
                <td>{wish.result?.resalePrice}</td>
                <td>
                  <button
                    onClick={() => handleDelete(wish?._id)}
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

export default WishList;
