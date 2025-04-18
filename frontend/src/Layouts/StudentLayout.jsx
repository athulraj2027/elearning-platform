import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Common/Navbar/Navbar'

const StudentLayout = () => {
  return (
    <div>
        <Navbar />
      <Outlet/>
    </div>
  )
}

export default StudentLayout
