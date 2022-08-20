import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { async } from "@firebase/util";
import Loading from "../Loading/Loading";
import GoogleAuth from "../GoogleAuth/GoogleAuth";

const SignUp = () => {
  const [error2, setError2] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, uError] = useUpdateProfile(auth);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      return setError2("Password did not match.");
    }

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  if (loading || updating) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center items-center my-5 ">
      <div className="card w-[400px] items-center bg-base-100 py-5 shadow-xl">
        <h2 className="text-3xl py-3">Create New Account!</h2>
        <form onSubmit={handleSignUp} className="w-[300px]">
          <div className="form-control my-2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              required
              name="name"
              type="text"
              placeholder="Type here"
              className="input input-bordered"
            />
          </div>
          <div className="form-control my-2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              required
              name="email"
              type="email"
              placeholder="Type here"
              className="input input-bordered"
            />
          </div>
          <div className="form-control my-2">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              required
              name="password"
              type="password"
              placeholder="Type here"
              className="input input-bordered"
            />
            {error && toast.error(error.message, { id: "error" })}
            {uError && toast.error(uError.message, { id: "uError" })}
          </div>
          <div className="form-control my-2">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              required
              name="confirmPassword"
              type="password"
              placeholder="Type here"
              className="input input-bordered"
            />
            <label className="label">
              {error2 && (
                <span className="label-text-alt text-red-700">{error2}</span>
              )}
            </label>
          </div>
          <p className="mb-2">
            <span className="text-gray-900">Already have an account?</span>
            <Link to="/login" className="text-blue-700 ">
              LogIn
            </Link>
          </p>
          <input className="btn w-full " type="submit" value="SignUp" />
        </form>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default SignUp;
