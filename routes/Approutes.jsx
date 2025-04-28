import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Overview from '../pages/Overview'
import Analytic from '../pages/Analytic.jsx'
import Reports from '../pages/Reports'
import Settings from '../pages/Setting'
import Profile from '../pages/Profile.jsx'
import Logout from '../pages/Logout.jsx'
function Approutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/analytic" element={<Analytic />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile" element={<Logout />} />
      
    </Routes>
  )
}

export default Approutes