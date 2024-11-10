import React from "react";

const SingleCourse = ({ title, slug, id }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Slug: {slug}</p>
      <p>ID: {id}</p>
    </div>
  );
};

export default SingleCourse;
