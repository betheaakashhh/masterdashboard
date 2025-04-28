import React from 'react';
import { useLocation } from 'react-router-dom';
import './Breadcrumbs.css';

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <div className="breadcrumbs">
      <span className="breadcrumb-item">Dashboard</span>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        return (
          <span key={index} className="breadcrumb-item">
            / {name.charAt(0).toUpperCase() + name.slice(1)}
          </span>
        );
      })}
    </div>
  );
}

export default Breadcrumbs;
