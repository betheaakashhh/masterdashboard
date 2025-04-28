import React from 'react';
import './PopularSearchQueries.css';

function PopularSearchQueries() {
  const searchQueries = [
    { feature: 'AI Recommendations', users: 3200, avgPercent: '65%' },
    { feature: 'Product Search', users: 2800, avgPercent: '58%' },
    { feature: 'Price Comparison', users: 2100, avgPercent: '45%' },
    { feature: 'User Reviews', users: 1700, avgPercent: '35%' },
    { feature: 'Voice Search', users: 1300, avgPercent: '28%' },
  ];

  return (
    <div className="popular-search-queries">
      <h2>Popular Search Queries</h2>

      <div className="query-table">
        <div className="query-header">
          <span>Feature</span>
          <span>No. of Users</span>
          <span>Average % of Users</span>
        </div>

        {searchQueries.map((query, index) => (
          <div className="query-row" key={index}>
            <span>{query.feature}</span>
            <span>{query.users}</span>
            <span>{query.avgPercent}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularSearchQueries;
