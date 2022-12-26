import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (user || gUser) {
      navigate(from, { replace: true });
   }
  },[user, from, navigate, gUser]);


  
  useEffect(() => {

    if(loading || gLoading) {
      return () => {
        <Loading/>
     };
    }
  },[loading, gLoading]);
 

  return (
    <div className="flex justify-center items-center my-5 ">
      <div className="card w-[400px] items-center bg-base-100 py-5 shadow-xl">
        <h2 className="text-3xl py-3">Please Login!</h2>
        <form onSubmit={handleLogin} className="w-[300px]">
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
            {error && toast.error(error.message, { id: "error3" })}
            {gError && toast.error(gError.message, { id: "gError" })}

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
          </div>
          <p className="mb-2">
            <span className="text-gray-900">Don't have account?</span>{" "}
            <Link to="/signup" className="text-blue-700 ">
              SignUp
            </Link>
          </p>
          <input className="btn w-full " type="submit" value="LogIn" />
        </form>
        <button
        onClick={() => signInWithGoogle()}
        className="btn btn-outline w-[300px] my-2"
      >
        Continue with Google
      </button>
      </div>
    </div>
  );
};

export default Login;
