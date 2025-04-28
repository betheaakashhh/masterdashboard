import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs/Breadcumbs'
import './Overview.css';
import DateRangeDropdown from '../components/Daterange/DateRangeDropdown';
import ComposedResponsive from '../components/Charts/ComposedResponsive';
import StackedAreaChart from '../components/Charts/StackedAreaChart';
import UserDemographic from '../components/Charts/UserDemographic';
const handleRangeChange = (range) => {
  console.log('Selected Range:', range);
};

function Overview() {
  return (
    <div className="overview">
      <div className="over-header">

      <div className="bread-item">
      <Breadcrumbs />
      </div>
      </div>

     <div className="panel">
     <div className="left-panel">
      <div className="over-charts">
      <div className="over-chart-res">
       <div className="name">
       <h2>New User vs Returning User</h2>
       </div>
       <div className="range-finder">
        <DateRangeDropdown onRangeChange={handleRangeChange} />
       </div>
      
        
      </div>
      <div className="res-chart">
        <ComposedResponsive />
       </div>

       
     </div>

     <div className="over-charts">
      <div className="over-chart-res">
       <div className="name">
       <h2>New User vs Returning User</h2>
       </div>
       <div className="range-finder">
        <DateRangeDropdown onRangeChange={handleRangeChange} />
       </div>
      
        
      </div>
      <div className="res-chart-stacked">
        <StackedAreaChart />
       </div>

       
     </div>

     <div className="over-charts">
      <div className="over-chart-res">
       <div className="name">
       <h2>New User vs Returning User</h2>
       </div>
       <div className="range-finder">
        <DateRangeDropdown onRangeChange={handleRangeChange} />
       </div>
      
        
      </div>
      <div className="res-chart">
        <ComposedResponsive />
       </div>

       
     </div>
      </div>
      <div className="right-panel">
        
        <UserDemographic />
      </div>
     </div>
    
      
      
    </div>
  )
}

export default Overview