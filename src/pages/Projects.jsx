import React, { useState } from 'react';
import PageLayout from '../components/PageLayout.jsx';
import placeholderImage from '../assets/placeholder.svg';

const ProjectItem = ({ id, title, description, image, isOpen, onToggle }) => {
  return (
    <div className="project-item">
      <button 
        className="project-button" 
        onClick={() => onToggle(id)}
        aria-label={`Show ${title}`}
      >
        {title} <span style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
      </button>
      {isOpen && (
        <div className="project-content">
          <img src={image} alt={`${title} image`} />
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const [openProjects, setOpenProjects] = useState(new Set());

  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Project 1 description',
      image: placeholderImage
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Project 2 description',
      image: placeholderImage
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Project 3 description',
      image: placeholderImage
    }
  ];

  const toggleProject = (projectId) => {
    const newOpenProjects = new Set(openProjects);
    if (newOpenProjects.has(projectId)) {
      newOpenProjects.delete(projectId);
    } else {
      newOpenProjects.add(projectId);
    }
    setOpenProjects(newOpenProjects);
  };

  return (
    <PageLayout title="Projects" className="page-section">
      {projects.map(project => (
        <ProjectItem
          key={project.id}
          {...project}
          isOpen={openProjects.has(project.id)}
          onToggle={toggleProject}
        />
      ))}
    </PageLayout>
  );
};

export default Projects;
