import React, { useState } from 'react';
import './DateRangeDropdown.css';

function DateRangeDropdown({ onRangeChange }) {
  const [selectedRange, setSelectedRange] = useState('Last 7 Days');

  const handleChange = (event) => {
    setSelectedRange(event.target.value);
    onRangeChange(event.target.value);
  };

  return (
    <div className="date-range-dropdown">
      <select value={selectedRange} onChange={handleChange}>
        <option value="Today">Today</option>
        <option value="Yesterday">Yesterday</option>
        <option value="Last 7 Days">Last 7 Days</option>
        <option value="Last 30 Days">Last 30 Days</option>
        <option value="This Month">This Month</option>
        <option value="Last Month">Last Month</option>
      </select>
    </div>
  );
}

export default DateRangeDropdown;
