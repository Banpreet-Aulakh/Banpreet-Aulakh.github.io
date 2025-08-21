import React from 'react';
import PageLayout from '../components/PageLayout.jsx';

const Home = () => {
  return (
    <PageLayout>
      <div className="welcome-section">
        <h3>Welcome to My Portfolio</h3>
        <p>
          Hi! I'm Banpreet Aulakh, a Computing Science student at Simon Fraser University. 
          I'm passionate about software development and always eager to learn new technologies.
        </p>
        <p>
          Explore my projects, experience, and coursework to learn more about my journey 
          in computer science.
        </p>
      </div>
    </PageLayout>
  );
};

export default Home;
