import React from "react";

// Component to display a single project card
const ProjectCard = ({ project }) => {
  return (
    <article className="card">
      <img
        className="cardimage"
        src={project.img}
        alt={project.title}
      />

      <div style={{ width: "200px" }} className="box">
        <h1 className="title">{project.title}</h1>
        <p className="sub-title">{project.desc}</p>
        <div className="flex">
          <div className="icon-card flex">
            {/* Demo Link */}
            <a
              href={project.demo}
              className="icon-link"
              target="_blank"
              rel="noopener noreferrer"
            />
            {/* Github Link */}
            <a
              href={project.github}
              className="icon-github"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
          {/* More details link */}
          <a className="link flex" href={project.demo} target="_blank" rel="noopener noreferrer">
            more <span className="icon-arrow_forward" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;