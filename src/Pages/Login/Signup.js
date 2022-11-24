import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    const image = data.image[0];
    // console.log(image);

    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?expiration=600&key=f06ccb150c5df3e1705f9b6bc41df79b`;
    console.log(url);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        // console.log(imageData.data.display_url);
        createUser(data.email, data.password).then((result) => {
          console.log(result);
          updateUserProfile(data.name, imageData.data.display_url).then(
            (updateUser) => {
              toast.success("User created successfully.");
              navigate("/");
            }
          );
        });
      });
  };

  return (
    <div className="hero ">
      <div className="hero-content">
        <div className="card">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body w-96 lg:w-[500px]"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name")}
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email")}
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                {...register("image")}
                type="file"
                name="image"
                accept="image/*"
                placeholder="Your Photo"
                className="file-input file-input-bordered file-input-success"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Select User Type</span>
              </label>
              <select
                {...register("role")}
                name="role"
                id=""
                className="select select-success"
              >
                <option selected value="buyer">
                  Buyer
                </option>
                <option value="seller">Seller</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password")}
                type="password"
                name="password"
                placeholder="Your Password"
                className="input input-bordered"
              />
              <label className="label">
                <p className="label-text-alt">
                  Alreday have an account?{" "}
                  <Link to="/login" className="label-text-alt link link-hover">
                    Login
                  </Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-success text-black hover:text-white"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
