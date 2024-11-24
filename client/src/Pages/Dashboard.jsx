// import React from 'react'

import DashContent from "../Components/Dashboard_Elements/DashContent"
import Sidebar from "../Components/Dashboard_Elements/Sidebar"


const Dashboard = () => {
  return (
    <div className="flex justify-start">
      <Sidebar />
      <DashContent />
    </div>
  )
}

export default Dashboard
