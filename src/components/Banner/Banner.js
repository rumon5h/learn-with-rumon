import React from "react";
import bannerImage from '../../images/bannerImage.jpg';


const Banner = () => {
  return (
    <div className="grid grid-col-reverse grid-cols-1 md:grid-cols-2 gap-5 p-5 my-10 w-full">
        
        <div className="w-full">
          <h1 className="text-3xl font-bold">Launch your new career with a Professional Certificate!</h1>
          <p className="py-6">
          Professional <span className="font-bold">Certificates</span> offer flexible, online training designed to get you job-ready for high-growth fields.
          </p>
          <p className="text-xl">7 day free trial | Starting at $39 per month | Less than 6 months at your own pace</p>
          <button className="btn btn-active px-[50px] mt-3">Get Started</button>
        </div>
        <div className="w-full">
        <img
          src={bannerImage}
          className="image-full rounded-lg shadow-2xl"
          alt=""
        />
        </div>
    </div>
  );
};

export default Banner;
