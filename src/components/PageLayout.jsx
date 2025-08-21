import React from 'react';

const PageLayout = ({ title, children, className = '' }) => {
  return (
    <div className={`page-layout ${className}`}>
      {title && <h3 className="page-title">{title}</h3>}
      <div className="page-content">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
