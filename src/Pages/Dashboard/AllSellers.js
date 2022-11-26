import React, { useEffect, useState } from "react";

const AllSellers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/dashboard/users/sellers")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

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
              <tr className="hover" key={user._id}>
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  <button className="btn btn-success">Verify</button>
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

export default AllSellers;
