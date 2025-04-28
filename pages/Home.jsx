import React from 'react'
import LineChartCom from '../components/Charts/LineChartCom';
import BarChartCom from '../components/Charts/BarChartCom';
import PieChartCom from '../components/Charts/PieChartCom';
import './Home.css';
import Breadcrumbs from '../components/Breadcrumbs/Breadcumbs';

function Home() {
  return (
    <div className="dashboard">
      <div className="bread-crumbs">
      <Breadcrumbs />
      </div>
     
      <div className="cards">
        <div className="card">
          <h2>Total Users</h2>
          <p>1,234</p>
          
        </div>
        <div className="card">
          <h2>Total Sales</h2>
          <p>$12,345</p>
        </div>
        <div className="card">
          <h2>Total Revenue</h2>
          <p>$67,890</p>
        </div>
        <div className="card">
          <h2>Masters</h2>
          <p>$67,80</p>
        </div>
        </div>
        <div className="charts">
          <div className="chart">
            <h2>Sales Chart</h2>
            <LineChartCom />
          </div>
          <div className="chart">
            <h2>Revenue Chart</h2>
            <BarChartCom />
          </div>
          <div className="chart">
            <h2>Chart</h2>
            <PieChartCom />
          </div>
        
      </div>
    </div>

  )
}

export default Home