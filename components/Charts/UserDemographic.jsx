import React from 'react';
import './UserDemographic.css';
import worldMap from '../../src/assets/worldmap.jpg'; // your local map image

function UserDemographic() {
  const cities = [
    { city: 'New York', users: 2300, sales: 120, revenue: '$12,000' },
    { city: 'London', users: 1800, sales: 95, revenue: '$9,500' },
    { city: 'Tokyo', users: 2100, sales: 110, revenue: '$11,300' },
    { city: 'Paris', users: 1400, sales: 80, revenue: '$8,000' },
    { city: 'Mumbai', users: 1700, sales: 85, revenue: '$8,700' },
  ];

  return (
    <div className="user-demographic">
      <div className="map-container">
        <img src={worldMap} alt="World Map" className="world-map" />
      </div>
      <div className="city-table">
        <div className="table-header">
          <span>City</span>
          <span>Users</span>
          <span>Sales</span>
          <span>Revenue</span>
        </div>
        {cities.map((item, index) => (
          <div className="table-row" key={index}>
            <span>{item.city}</span>
            <span>{item.users}</span>
            <span>{item.sales}</span>
            <span>{item.revenue}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDemographic;
