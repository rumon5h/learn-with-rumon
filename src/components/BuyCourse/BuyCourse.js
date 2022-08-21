import React from "react";
import { useParams } from "react-router-dom";
import useCourse from "../Hook/useCourse";

const BuyCourse = () => {
  const courses = useCourse();

  const { id } = useParams();
  const course = courses?.find((course) => course.id === parseInt(id));
  

  return (
    <div className="flex justify-center items-center mt-10">
      {course && (
        <p className="text-2xl">
          Congratulations you have buy{" "}
          <span className="font-bold">{course.name}</span> Course!
        </p>
      )}
    </div>
  );
};

export default BuyCourse;
