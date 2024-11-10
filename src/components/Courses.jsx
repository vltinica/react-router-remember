import React from "react";
import courses from "../data/courses";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div className="courses-container">
      <h2>Courses</h2>
      <div className="coursesContainerDiv">
        {courses.map((course) => (
          <div key={course.id} className="divCourseLink">
            <Link to={course.slug} className="courseLink">
              {course.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
