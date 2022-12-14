import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import useToken from "../../hooks/useToken";
import SocialLogin from "./SocialLogin";
import SmallSpiner from "../Home/components/Spinner/SmallSpiner";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile, loading } = useContext(AuthContext);

  const [createUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createUserEmail);
  const [signupError, setSignupError] = useState("");

  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  const onSubmit = (data) => {
    // console.log(data);
    const image = data.image[0];
    // console.log(image);

    const formData = new FormData();
    formData.append("image", image);

    const url = process.env.REACT_APP_IMGBB_KEY;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        // console.log(imageData.data.display_url);
        createUser(data.email, data.password).then((result) => {
          updateUserProfile(data.name, imageData.data.display_url).then(() => {
            saveUser(data.email, data.name, data.role);
            toast.success("User created successfully.");
          });
        });
      });
  };

  const saveUser = (email, name, role) => {
    const user = { email: email, name: name, role: role };
    // console.log(user);
    fetch("https://kenabecha-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
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
                <option selected value="Buyer">
                  Buyer
                </option>
                <option value="Seller">Seller</option>
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
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-success text-black hover:text-white"
              >
                {loading ? <SmallSpiner /> : "Sign Up"}
              </button>
            </div>
            <div>
              {signupError && (
                <p className="text-center text-red-600">{signupError}</p>
              )}
            </div>
          </form>
          <div className="divider">OR</div>
          <SocialLogin setSignupError={setSignupError}></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Signup;
