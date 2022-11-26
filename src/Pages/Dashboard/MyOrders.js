import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../contexts/AuthProvider";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { data: orders } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/orders/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  // console.log(orders);

  return (
    <div>
      <h2 className="text-3xl mb-4">My Orders</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Price</th>
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
                    <Link to={`/dashboard/payment/${order?._id}`}>
                      <button className="btn btn-sm btn-success">Pay</button>
                    </Link>
                  )}
                  {order.price && order.paid && (
                    <span className="text-green-500">Paid</span>
                  )}
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
