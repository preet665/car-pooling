import React from 'react'
import SideBar from '../components/Dashboard/SideBar'
import Navbar from '../components/Navbar/Navbar'
import ProfilePage from '../components/Profile'

const Profile = () => {
  return (
    <main>
    <Navbar />
      <ProfilePage />
    </main>
  )
}

export default Profile