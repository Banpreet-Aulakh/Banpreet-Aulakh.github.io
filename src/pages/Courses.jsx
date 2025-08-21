import React from 'react';
import PageLayout from '../components/PageLayout.jsx';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Course 1',
      description: 'Course 1 description'
    },
    {
      id: 2,
      title: 'Course 2',
      description: 'Course 2 description'
    },
    {
      id: 3,
      title: 'Course 3',
      description: 'Course 3 description'
    }
  ];

  return (
    <PageLayout title="Completed Coursework" className="page-section">
      {courses.map(course => (
        <div key={course.id} className="course">
          <h4>{course.title}</h4>
          <p>{course.description}</p>
        </div>
      ))}
    </PageLayout>
  );
};

export default Courses;
