import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center my-5 ">
      <div class="card w-[400px] items-center bg-base-100 py-5 shadow-xl">
        <h2 className="text-3xl py-3">Please Login!</h2>
        <form className="w-[300px]">
          <div class="form-control my-2">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
            required
            name="email"
              type="email"
              placeholder="Type here"
              class="input input-bordered"
            />
            <label class="label">
              <span class="label-text-alt">Alt label</span>
            </label>
          </div>
          <div class="form-control my-2">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
            required
            name="password"
              type="password"
              placeholder="Type here"
              class="input input-bordered"
            />
            <label class="label">
              <span class="label-text-alt">Alt label</span>
            </label>
          </div>
          <p className="mb-2">
            <span className="text-gray-900">Don't have account?</span> <Link to="/signup" className="text-blue-700 ">SignUp</Link>
          </p>
          <input className="btn w-full " type="submit" value="LogIn" />
        </form>
      </div>
    </div>
  );
};

export default Login;
