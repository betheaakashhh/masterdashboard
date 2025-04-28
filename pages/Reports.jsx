import React from 'react'

import './Reports.css'
import Breadcrumbs from '../components/Breadcrumbs/Breadcumbs'
import BarChartCom from '../components/Charts/BarChartCom'
import PopularSearchQueries from '../components/Charts/PopularSearchQueries'
import RatingBlock from '../components/Rating/RatingBlock'
import DateRangeDropdown from '../components/Daterange/DateRangeDropdown'
import ComposedResponsive from '../components/Charts/ComposedResponsive'
import TopSearchReport from '../components/Charts/TopSearchReport'

function Reports() {
  return (
    <div className="report">
      <div className="breadcrums">
        <Breadcrumbs />

      </div>
     <div className="sep-pan">
     <div className="tw-chart-lf-rt">
        <div className="chart-lf">
          <BarChartCom />
        </div>
        </div>
        <div className="tw-chart-lf-rt">
        <div className="chart-rt">
          <PopularSearchQueries />
        </div>
        </div>
      
     </div>
     <div className="rating-bl">
      <RatingBlock />
     </div>

     <div className="search-con-rate">
      <div className="s-c-header">
        <h2>Search Queries</h2>
        <DateRangeDropdown />
      </div>
      <div className="s-chart-lf">
        <ComposedResponsive />
      </div>
      <div className="s-chart-rt">
        <TopSearchReport />
      </div>
     </div>
    </div>
  )
}

export default Reports