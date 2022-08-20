import React from "react";
import Banner from "../Banner/Banner";
import Benefit from "../Benefit/Benefit";
import Courses from "../Courses/Courses";
import Footer from "../Footer/Footer";
import JobSearch from "../JobSearch/JobSearch";

const Home = () => {
  return (
    <div>
      <Banner />
      <Benefit/>
      <Courses/>
      <JobSearch/>
      <Footer />
    </div>
  );
};

export default Home;
