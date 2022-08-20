import React from "react";
import frontEnd from "../../images/front-end-developer_900x369.png";
import BackEnd from "../../images/back-end-developer_900x369.png";
import digitalMarketer from "../../images/Digital_Marketer.png";
import dataScience from "../../images/Data_Science.png";
import ITSupport from "../../images/IT-support-specialist.png";
import dataAnalyst from "../../images/Rectangle_3371-2.png";
import socialMediaMarketer from "../../images/Rectangle_3371-3.png";
import projectManager from "../../images/Project_Management.png";
import UXDesign from "../../images/UX_Design.png";


const Courses = () => {
  const courses = [
    {
      id: 1,
      img: frontEnd,
      name: "Front-End Developer",
      body: "Design and develop the look, feel, function, and user experience of a website",
      like: [
        "Problem solving",
        "Thinking creatively",
        "Creating great user experiences",
      ],
      benefit: "$86,200 median entry-level salary",
      price: 50,
    },

    {
      id: 2,
      img: BackEnd,
      name: "Back-End Developer",
      body: "Build the structures that help websites function using industry-standard tools and programming systems",
      like: ["Thinking logically", "Solving complex problems", "Collaborating"],
      benefit: "$93,900 median entry-level salary",
      price: 50,
    },
    {
      id: 3,
      img: digitalMarketer,
      name: "Digital Marketer",
      body: "Define and develop digital strategies to deliver business growth through online channels",
      like: ["Working with numbers", "Understanding people", "Problem solving"],
      benefit: "$43,900 median entry-level salary",
      price: 100,
    },
    {
      id: 4,
      img: ITSupport,
      name: "IT Support Specialist",
      body: "Evaluate and troubleshoot technology issues so equipment runs smoothly",
      like: ["Troubleshooting", "Helping people", "Problem solving"],
      benefit: "$39,000 median entry-level salary",
      price: 70,
    },
    {
      id: 5,
      img: dataAnalyst,
      name: "Data Analyst",
      body: "Collect, organize, and transform data to make informed decisions",
      like: ["Working with numbers", "Attention to detail", "Problem solving"],
      benefit: "$61,200 median entry-level salary",
      price: 90,
    },
    {
      id: 6,
      img: projectManager,
      name: "Project Manager",
      body: "Oversee the planning and execution of projects to ensure they’re successful",
      like: ["Leading a team", "Communication", "Problem solving"],
      benefit: "$64,100 median entry-level salary",
      price: 90,
    },
    {
      id: 7,
      img: UXDesign,
      name: "UX Designer",
      body: "Make digital and physical products easier and more enjoyable to use",
      like: ["Understanding people", "Thinking creatively", "Problem solving"],
      benefit: "$81,500 median entry-level salary",
      price: 100,
    },
    {
      id: 8,
      img: socialMediaMarketer,
      name: "Social Media Marketer",
      body: "Social media specialists establish, build, and manage a company’s social media",
      like: ["Engaging with people", "Following trends", "Thinking creatively"],
      benefit: "$42,200 median entry-level salary",
      price: 70,
    },
    {
      id: 9,
      img: dataScience,
      name: "Data Scientist",
      body: "Extract and analyze data to make informed business decisions",
      like: [
        "Working with numbers",
        "Intellectual curiosity",
        "Writing and communication",
      ],
      benefit: "$102,400 median entry-level salary",
      price: 200,
    },
  ];

  return (
    <>
      <div className="my-10 p-5" >
        <h2 className="text-2xl text-center">
          Find a career that works for you
        </h2>
        <h4 className="text-xl text-center mt-3">
          Whatever your background or interests are, Professional Certificates
          have you covered.
        </h4>
        <div className="grid grid-col-1 lg:grid-cols-2 xl:grid-cols-3  gap-3 mt-10">
          {courses.map((course) => {
            const { id, name,body, img, like, benefit, price } = course;
            
            return (
              <article class="card w-96 bg-base-100 mx-auto shadow-xl">
                <figure>
                  <img src={img} alt="Shoes" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">{name}</h2>
                  <p>{body}</p>
                  <ul className="">
                    <p className="font-bold text-gray-900 mb-1">If you like:</p>
                    {
                        like.map((l, index) => <li className="ml-5 mt-2 list-disc	" key={index}>{l}</li> )
                    }
                  </ul>
                  <p className="text-gray-900 font-bold">{benefit}</p>
                  <p> <span className="font-bold">Price:</span> ${price}</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-outline">Buy Now</button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Courses;
