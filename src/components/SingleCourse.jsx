import React from "react";
import { useParams } from "react-router-dom";
import courses from "../data/courses";

const SingleCourse = () => {
  const params = useParams();
  console.log(params);
  
  return (
    <div>
      <h2>Single Course Info</h2>
    </div>
  );
};

export default SingleCourse;
