import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Spinner from "../Home/components/Spinner/Spinner";

const AllSellers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://kenabecha-server.vercel.app/sellers");
      const data = await res.json();
      return data;
    },
  });

  const handleVerify = (email) => {
    fetch("https://kenabecha-server.vercel.app/sellers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Seller Verified");
      });
  };

  const handleDelete = (productId) => {
    const id = productId;
    fetch(`https://kenabecha-server.vercel.app/sellers`, {
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

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h2 className="text-3xl mb-4">All Sellers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr className="hover" key={user?._id}>
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {!user?.verified && (
                    <button
                      onClick={() => handleVerify(user?.email)}
                      className="btn btn-success"
                    >
                      Verify
                    </button>
                  )}

                  {user?.verified && (
                    <span className="text-green-500">Verified</span>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user?._id)}
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

export default AllSellers;
