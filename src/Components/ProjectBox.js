import React from 'react';

// ProjectBox Component: Renders individual project details
const ProjectBox = ({ projectName, projectDesc, githubLink }) => {
  return (
    <div className="projectBox">
      <h3>{projectName}</h3>
      <p>{projectDesc}</p>
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="githubLink"
        >
          GitHub Link
        </a>
      )}
    </div>
  );
};

// Projects Component: Renders the list of projects
const Projects = () => {
  const projects = [
    {
      projectName: 'Stock Maintenance System',
      projectDesc:
        'Developed a stock management web application using Python and Flask to track, add, update, and delete inventory items efficiently. Integrated user-friendly interfaces for real-time inventory monitoring and streamlined product management.',
      githubLink: 'https://github.com/Nancy-2005/Stock-maintenance', // Replace with your actual link
    },
    {
      projectName: 'Pay-Flow Payment Management App',
      projectDesc:
        'Designed and developed a responsive mobile-first web application to manage payments, customers, subscriptions, and transfers using HTML, CSS, and JavaScript. Implemented dynamic content loading, interactive dashboards, and navigation with mock financial data to simulate a real-time user experience.',
      githubLink: 'https://github.com/Nancy-2005/PayFlow', // Replace with your actual link
    },
  ];

  return (
    <div className="projectsSection">
      <h2>Personal Projects</h2>
      <div className="projectsGrid">
        {projects.map((project, index) => (
          <ProjectBox
            key={index}
            projectName={project.projectName}
            projectDesc={project.projectDesc}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;