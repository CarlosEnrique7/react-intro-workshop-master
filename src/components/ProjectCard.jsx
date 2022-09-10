import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ projectName, projectDescription, projectImage }) => {
  return (
    <div className="card">
      <img className="image" src={projectImage} alt={projectName} />
      <h4 className="name">{projectName}</h4>
      <p className="description">{projectDescription}</p>
    </div>
  );
};

export default ProjectCard;
