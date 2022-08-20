import React from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import useCourse from "../Hook/useCourse";

const Courses = () => {
  const courses = useCourse();
  const location = useLocation();

  return (
    <>
      <div className="my-10 p-5">
        <h2 className="text-2xl text-center">
          Find a career that works for you
        </h2>
        <h4 className="text-xl text-center mt-3">
          Whatever your background or interests are, Professional Certificates
          have you covered.
        </h4>
        <div className="grid grid-col-1 lg:grid-cols-2 xl:grid-cols-3  gap-3 mt-10">
          {courses.map((course) => {
            const { id, name, body, img, like, benefit, price } = course;

            return (
              <article
                key={id}
                className="card w-96 bg-base-100 mx-auto shadow-xl"
              >
                <figure>
                  <img src={img} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{name}</h2>
                  <p>{body}</p>
                  <ul className="">
                    <p className="font-bold text-gray-900 mb-1">If you like:</p>
                    {like.map((l, index) => (
                      <li className="ml-5 mt-2 list-disc" key={index}>
                        {l}
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-900 font-bold">{benefit}</p>
                  <p>
                    {" "}
                    <span className="font-bold">Price:</span> ${price}
                  </p>
                  <div className="card-actions justify-end">
                    <Link to={`/course/${id}`}>
                      <button className="btn btn-outline">Buy Now</button>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      {location?.pathname === "/courses" && <Footer />}
    </>
  );
};

export default Courses;
