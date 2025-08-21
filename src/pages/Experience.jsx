import React from 'react';
import PageLayout from '../components/PageLayout.jsx';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Job 1',
      description: 'Job 1 description'
    },
    {
      id: 2,
      title: 'Job 2',
      description: 'Job 2 description'
    },
    {
      id: 3,
      title: 'Job 3',
      description: 'Job 3 description'
    }
  ];

  return (
    <PageLayout title="Experience" className="page-section">
      {experiences.map(experience => (
        <div key={experience.id} className="job">
          <h4>{experience.title}</h4>
          <p>{experience.description}</p>
        </div>
      ))}
    </PageLayout>
  );
};

export default Experience;
