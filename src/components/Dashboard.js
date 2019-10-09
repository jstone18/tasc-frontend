import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="ui container">
      <div className="app-header">
        <h1 className="">
          Welcome to T.A.S.C.
        </h1>
      </div>
      <div className="dashboard-container">
        <div className="ui raised very padded text container segment">
          <Link to="/rooms">
            <button className="dashboard-button">ALL ROOMS</button> 
          </Link>
          <br/>
          <br/>
          <Link to="/students">
            <button className="dashboard-button">ALL STUDENTS</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
