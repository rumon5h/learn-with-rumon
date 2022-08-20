import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }

  const logout = () => {
    signOut(auth);
  };

  return (
    <div className="navbar flex-col md:flex-row  left-0 z-10 bg-gray-900 text-white">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Learn with Rumon
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div>
          <Link className="mr-2 " to="/home">
            Home
          </Link>
          <Link className="mr-2 " to="/courses">
            Courses
          </Link>
          <Link className="mr-2 " to="/about">
            About
          </Link>
        </div>
        {user?.uid ? (
          <div className="dropdown text-black dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" alt="" />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="" className="justify-between">
                  {user?.displayName}
                </Link>
              </li>
              <li>
                <Link to="">Settings</Link>
              </li>
              <li>
                <Link onClick={logout} to="/login">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-active">LogIn</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
