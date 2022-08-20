import React from "react";
import image1 from "../../images/prior-experience-optional.avif";
import image2 from "../../images/earn-valuable-credential.avif";
import image3 from "../../images/learn-pace.avif";

const Benefit = () => {

  const benefits = [
    { 
      id: 1, 
      title: "Prior experience optional", 
      img: image1, 
      body: "Build job-ready skills, even if you're new to the field." 
    },
    { 
      id: 2, 
      title: "Earn a valuable credential", 
      img: image2, 
      body: "Apply your new skills to real-world projects using the latest industry tools and techniques." 
    },
    { 
      id: 3,
      title: "Learn at your own pace", 
      img: image3, 
      body: "Complete the training in less than 6 months while working a full-time job." 
    },
  ];

  return (
    <div className="my-10 p-5 ">
      <h2 className="text-4xl text-center text-gray-900">
        Take the first step toward your new career!
      </h2>
      <p className="text-xl mt-3 text-center text-gray-700">
        Get professional-level training and earn a credential from a leading
        company.
      </p>
      <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
        {
          benefits.map(benefit => {
            const {id, title, img, body} = benefit;

            return <article
            className="text-center card shadow-md p-3"
            key={id}>
              <img className="mx-auto" src={img} alt="" />
              <h4 className="my-3">{title}</h4>
              <p>{body}</p>
            </article>
          })
        }
      </div>
    </div>
  );
};

export default Benefit;
