import React from 'react'
import './Analytic.css'
import BarChartCom from '../components/Charts/BarChartCom'
import PieChartCom from '../components/Charts/PieChartCom'
import StackedAreaChart from '../components/Charts/StackedAreaChart'
import Breadcrumbs from '../components/Breadcrumbs/Breadcumbs'
import ComposedResponsive from '../components/Charts/ComposedResponsive'

function Analytic() {
  return (
    <div className="analytic">
      <div className="bread-crumb-ana">
        <Breadcrumbs />
      </div>
      <div className="two-panel">
        <div className="left">
        <BarChartCom />
        </div>
        <div className="right">
        <ComposedResponsive />
        </div>
      </div>
      <div className="two-panel bottom-chart">
       <StackedAreaChart />
      </div>
    </div>
  )
}

export default Analytic