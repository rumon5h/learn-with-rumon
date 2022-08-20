import React from "react";
import Banner from "../Banner/Banner";
import Benefit from "../Benefit/Benefit";
import Courses from "../Courses/Courses";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Benefit/>
      <Courses/>
      <Footer />
    </div>
  );
};

export default Home;
