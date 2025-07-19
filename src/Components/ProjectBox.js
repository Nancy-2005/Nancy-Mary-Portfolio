

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
        'Developed a Flask-based web app for inventory management. Features include adding, updating, deleting, and searching stock items, with a user-friendly dashboard and MySQL backend for data persistence.',
      githubLink: 'https://github.com/Nancy-2005/Stock-maintenance',
    },
    {
      projectName: 'Pay-Flow Payment Management App',
      projectDesc:
        'Designed a mobile-first UI (React) for managing mock payments and subscriptions. Implemented responsive dashboards, charts, and transaction history to simulate fintech applications.',
      githubLink: 'https://github.com/Nancy-2005/PayFlow',
    },
    {
      projectName: 'Expense Tracker App',
      projectDesc:
        'Built a Python-Flask web app to track expenses by category and date. Integrated visual charts (Pie/Bar), monthly limit alerts, exportable PDF/Excel reports, and speech-to-expense input.',
      githubLink: '', // Add your actual GitHub link if available
    },
    {
      projectName: 'Bug Buster Game',
      projectDesc:
        'A browser-based debugging game created using HTML, CSS, and JavaScript. Includes multiple levels, countdown timer, animated failure effects, and motivational scoring.',
      githubLink: '', // Add your actual GitHub link if available
    },
    {
      projectName: 'Linux Tray Utility',
      projectDesc:
        'Python GTK application for Linux to manage power button events with a system tray interface, improving system usability for laptop users.',
      githubLink: '', // Add your actual GitHub link if available
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