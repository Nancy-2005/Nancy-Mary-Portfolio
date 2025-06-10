import React from 'react';

const Internship = () => {
  const internships = [
    {
      company: 'DRDO',
      role: 'Intern',
      projects: [
        {
          title: 'Human Machine Interface Development for AFVS - Developed HMI projects showcasing interactive UI skills',
          isSubheading: true, // Mark this as a subheading
        },
        {
          title: 'Image Magnification & Range Selection Tool',
          description:
            'Built an interactive image viewer using Qt and QML with dynamic zoom and magnification. Features include dynamic image clipping, interactive magnifier, and smooth UI transitions.',
        },
        {
          title: 'Data Logging & File Transfer App',
          description:
            'Designed a GUI-based tool for efficient file management and serial communication. Features include COM port selection, bulk file transfer, real-time progress tracking, and modern UI.',
        },
      ],
    },
    {
      company: 'Motioncut',
      role: 'Intern',
      projects: [
        {
          title: 'Web Development - Created web projects showcasing skills in front-end development and UI design',
          isSubheading: true, // Mark this as a subheading
        },
        {
          title: 'E-commerce Product Page',
          description: 'Designed a visually appealing e-commerce product page using HTML and CSS.',
        },
        {
          title: 'Dynamic Image Slider',
          description: 'Built a dynamic image slider with HTML, CSS, and JavaScript.',
        },
      ],
    },
  ];

  return (
    <div className="internshipSection">
      <h1>Internship Experience</h1>
      {internships.map((internship, index) => (
        <div key={index} className="internshipCard">
          <h2>{internship.company}</h2>
          <h3>{internship.role}</h3>
          {internship.projects.map((project, idx) =>
            project.isSubheading ? (
              // Render as subheading if marked
              <div key={idx} className="projectDetails">
                <h4>{project.title}</h4>
              </div>
            ) : (
              // Render as list item otherwise
              <ul key={idx}>
                <li>
                  <strong>{project.title}:</strong> {project.description}
                </li>
              </ul>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default Internship;