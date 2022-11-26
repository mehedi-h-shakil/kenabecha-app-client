import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Spinner from "../Home/components/Spinner/Spinner";

const AllBuyers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/buyers");
      const data = await res.json();
      return data;
    },
  });
  // useEffect(() => {
  //   fetch("http://localhost:5000/dashboard/users/buyers")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setUsers(data);
  //     });
  // }, []);

  const handleDelete = (productId) => {
    const id = productId;
    console.log(id);
    fetch(`http://localhost:5000/buyers`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("User Deleted");
        refetch();
      });
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <h2 className="text-3xl mb-4">All Buyers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Delte</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr className="hover" key={user._id}>
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
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

export default AllBuyers;
