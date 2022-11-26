import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useRole from "../hooks/useRole";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isRole] = useRole(user?.email);
  // console.log(isRole);
  return (
    <div>
      <Navbar />

      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />

        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-base-100">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <li>
              <Link to="/">Home</Link>
            </li>

            {isRole === "Buyer" && (
              <>
                <li>
                  <Link to="dashboard/myOrders">My Order</Link>
                </li>
                <li>
                  <Link to="/dashboard/wishlist">Wish</Link>
                </li>
              </>
            )}
            {isRole === "Admin" && (
              <>
                <li>
                  <Link to="/dashboard/users/allBuyers">All Buyers</Link>
                </li>
                <li>
                  <Link to="/dashboard/users/allSellers">All Sellers</Link>
                </li>
              </>
            )}

            {isRole === "Seller" && (
              <>
                <li>
                  <Link to="/dashboard/myProducts">My Products</Link>
                </li>
                <li>
                  <Link>My Buyers</Link>
                </li>
                <li>
                  <Link to="addAProduct">Add a Product</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
