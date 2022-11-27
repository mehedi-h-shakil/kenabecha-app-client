import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../contexts/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { data: orders, refetch } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/orders/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    fetch("http://localhost:5000/orders", {
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
      <h2 className="text-3xl my-4">My Orders</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <tr className="hover" key={order._id}>
                <th>{index + 1}</th>
                <td>{order?.bookedProduct}</td>
                <td>
                  <img src={order?.image} alt="" className="w-16" />
                </td>
                <td>{order?.price}</td>
                <td>
                  {order.price && !order.paid && (
                    <Link to={`/dashboard/payment/${order?.mobileId}`}>
                      <button className="btn btn-sm btn-success">Pay</button>
                    </Link>
                  )}
                  {order.price && order.paid && (
                    <span className="text-green-500">Paid</span>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="btn btn-sm "
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

export default MyOrders;
