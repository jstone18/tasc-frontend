import React from 'react'

const Dashboard = () => {
  return (
    <div className="ui container">
      <div class="app-header">
        <h1 class="">
          Welcome to T.A.S.C.
        </h1>
      </div>
      <div className="dashboard-container">
        <div className="ui raised very padded text container segment">
          <button className="dashboard-button">ALL ROOMS</button> 
          <br/>
          <br/>
          <button className="dashboard-button">ALL STUDENTS</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
