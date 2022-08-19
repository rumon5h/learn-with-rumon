import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="flex justify-center items-center my-5 ">
      <div class="card w-[400px] items-center bg-base-100 py-5 shadow-xl">
        <h2 className="text-3xl py-3">Create New Account!</h2>
        <form className="w-[300px]">
          <div class="form-control my-2">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
            required
            name='name'
              type="text"
              placeholder="Type here"
              class="input input-bordered"
            />
            <label class="label">
              <span class="label-text-alt">Alt label</span>
            </label>
          </div>
          <div class="form-control my-2">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
            required
            name='email'
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
            name='password'
              type="password"
              placeholder="Type here"
              class="input input-bordered"
            />
            <label class="label">
              <span class="label-text-alt">Alt label</span>
            </label>
          </div>
          <div class="form-control my-2">
            <label class="label">
              <span class="label-text">Confirm Password</span>
            </label>
            <input
            required
            name='confirm-password'
              type="password"
              placeholder="Type here"
              class="input input-bordered"
            />
            <label class="label">
              <span class="label-text-alt">Alt label</span>
            </label>
          </div>
          <p className="mb-2">
            <span className="text-gray-900">Already have an account?</span> <Link to="/login" className="text-blue-700 ">LogIn</Link>
          </p>
          <input className="btn w-full " type="submit" value="SignUp" />
        </form>
      </div>
    </div>
    );
};

export default SignUp;