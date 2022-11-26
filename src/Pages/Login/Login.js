import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login } = useContext(AuthContext);

  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const [signupError, setSignupError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const onSubmit = (data) => {
    console.log(data);
    login(data.email, data.password)
      .then((result) => {
        // console.log(result.user);
        const user = result.user;
        setLoginUserEmail(user?.email);
        toast.success("User login successfully");

        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
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
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email")}
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password")}
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <p className="label-text-alt link link-hover">
                  New to Kenabecha? <Link to="/signup">Signup</Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-success text-black hover:text-white"
              >
                Login
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

export default Login;
