import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import DriverManagementPage from './pages/DriverManagementPage'
import LoginPage from './pages/LoginPage'
import VehiclePage from './pages/VehiclePage'
import UserPage from './pages/Users'
import Profile from './pages/Profile'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact={true} element={<DashboardPage />} />
          <Route path='/login'  element={<LoginPage />} />
          <Route path='/driver'  element={<DriverManagementPage />} />
          <Route path='/vehicle'  element={<VehiclePage />} />
          <Route path='/user' element={<UserPage />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App