import React from "react";
import girlWithPC from '../../images/girl-with-the-computer.png';

const JobSearch = () => {
  return (
    <div className="grid grid-col-reverse grid-cols-1 md:grid-cols-2 gap-5 p-5 my-10 w-full">
        <div className="w-full">
        <img
          src={girlWithPC}
          className="w-full lg:w-[85%] rounded-lg shadow-2xl"
          alt=""
        />
        </div>
        <div className="w-full">
          <p className="text-blue-800">Finished a Professional Certificate?</p>
          <h2 className="text-3xl">Get resources and support to guide you through the job search process.</h2>
          <div className="mt-5">
            <h3 className="font-semibold text-xl">Showcase your skills</h3>
            <p className="mt-1">Present real-world projects to potential employers.</p>
          </div>
          <div className="mt-5">
            <h3 className="font-semibold text-xl">Enhance your resume</h3>
            <p className="mt-1">Get support to build a standout resume and LinkedIn profile.</p>
          </div>
          <div className="mt-5">
            <h3 className="font-semibold text-xl">Ace your interview</h3>
            <p className="mt-1">Practice and improve your interview skills with virtual feedback.</p>
          </div>
        </div>
        
    </div>
  );
};

export default JobSearch;
