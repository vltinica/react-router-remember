import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import courses from "../data/courses";

const SingleCourse = () => {
  const params = useParams();
  const navigate = useNavigate();
  const course = courses.find((course) => course.slug === params.coursesSlug);

  
  useEffect(() => {
    if (!course) {
      navigate("..", { relative: "path" });
    }
  }, [course, navigate]);

  

  return (
    <div style={{ margin: "25px auto" }}>
      <h2 style={{ padding: "20px" }}>{course?.title}</h2>
      <h3>{course?.slug}</h3>
      <h3 style={{ marginBottom: "20px" }}>{course?.id}</h3>
      <Link to=".." relative="path">
        All courses
      </Link>
    </div>
  );
};

export default SingleCourse;
