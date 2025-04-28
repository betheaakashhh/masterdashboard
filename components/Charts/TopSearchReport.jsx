import React from 'react';
import './TopSearchReport.css';

function TopSearchReport() {
  const topSearches = [
    { feature: 'AI Chatbots', users: 1200, averageUsage: '48%' },
    { feature: 'Data Analytics', users: 950, averageUsage: '38%' },
    { feature: 'Machine Learning', users: 870, averageUsage: '35%' },
    { feature: 'Cloud Computing', users: 790, averageUsage: '30%' },
    { feature: 'Cybersecurity', users: 640, averageUsage: '26%' },
  ];

  return (
    <div className="top-search-report">
      <h2>Top Search Report</h2>
      <div className="search-table">
        <div className="table-header">
          <div>Feature</div>
          <div>No. of Users</div>
          <div>Avg. % of Users</div>
        </div>

        {topSearches.map((item, index) => (
          <div className="table-row" key={index}>
            <div>{item.feature}</div>
            <div>{item.users}</div>
            <div>{item.averageUsage}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopSearchReport;
