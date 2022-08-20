import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center mt-5 items-center">
      <h2 className="text-2xl text-red-600">
        404 Page Not Found{" "}
        <Link className="text-blue-700" to="/home">
          {" "}
          <span className="text-4xl">&larr;</span> back to home
        </Link>{" "}
      </h2>
    </div>
  );
};

export default ErrorPage;
