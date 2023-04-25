import React from "react";

function Project({ imageSrc, title, description, href }) {
  return (
    <a className="project-container" href={href} target="_blank">
      <div className="project-image-wrapper">
        <img src={imageSrc} alt="" />
      </div>
      <div className="project-info">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default Project;
