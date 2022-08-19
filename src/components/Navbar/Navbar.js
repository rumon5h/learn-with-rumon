import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar flex-col md:flex-row bg-gray-900 text-white">
      <div className="flex-1">
        <Link to='/' className="btn btn-ghost normal-case text-xl" >Learn with Rumon</Link>
      </div>
      <div className="flex-none gap-2">
       <div>
        <Link className="mr-2 " to="/home">Home</Link>
        <Link className="mr-2 " to="/courses">Courses</Link>
        <Link className="mr-2 " to="/about">About</Link>
       </div>
        <div className="dropdown text-black dropdown-end">
          <label  tabIndex="0" className="btn btn-ghost btn-circle avatar">
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
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to="" >Settings</Link>
            </li>
            <li>
              <Link to="/login">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
