import React from "react";
import ProjectCard from "./ProjectCard";
import Placeholder from "../assets/placeholder.jpeg";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="section">
      <h1 className="section-title">Projects</h1>
      <div className="project-grid">
        <ProjectCard
          projectImage={Placeholder}
          projectName="Name of Project"
          projectDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio aut, saepe neque beatae perspiciatis, nesciunt et officia, optio praesentium placeat architecto id? Dolore, maxime architecto. Deleniti provident, fugit enim commodi modi ad pariatur possimus quidem ducimus aspernatur praesentium voluptas ipsum!"
        />
        <ProjectCard
          projectImage={Placeholder}
          projectName="Name of Project"
          projectDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio aut, saepe neque beatae perspiciatis, nesciunt et officia, optio praesentium placeat architecto id? Dolore, maxime architecto. Deleniti provident, fugit enim commodi modi ad pariatur possimus quidem ducimus aspernatur praesentium voluptas ipsum!"
        />
        <ProjectCard
          projectImage={Placeholder}
          projectName="Name of Project"
          projectDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio aut, saepe neque beatae perspiciatis, nesciunt et officia, optio praesentium placeat architecto id? Dolore, maxime architecto. Deleniti provident, fugit enim commodi modi ad pariatur possimus quidem ducimus aspernatur praesentium voluptas ipsum!"
        />
      </div>
    </div>
  );
};

export default Projects;
