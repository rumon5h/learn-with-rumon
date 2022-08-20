import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const GoogleAuth = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }
  if (user) {
    return navigate("/home");
  }

  return (
    <>
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-outline w-[300px] my-2"
      >
        Continue with Google
      </button>
      {error && toast.error(error.message, { id: "gError" })}
    </>
  );
};

export default GoogleAuth;
