import React from 'react'

const Attendances = (props) => {
  

  return (
    <div>
      {props.attendances.map(attendance => 
        <table className="ui celled table">
          <thead>
            <tr>
            <th><strong>Date</strong></th>
            <th><strong>Status</strong></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Date">{attendance.created_at}</td>
              <td data-label="Status">{attendance.check_in ? "Checked-In" : "Checked-Out"}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Attendances