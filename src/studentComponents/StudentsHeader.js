import React from 'react'
import { Link } from 'react-router-dom'

const StudentsHeader = () => {
  return (
    <div ui segment>
      <div id="students-app-header">
        <h1>
          STUDENTS
        </h1>
        <Link to='/students/new'>
          <button id="add-student">+Add Student</button>
        </Link>
      </div>
    </div>
  )
}

export default StudentsHeader
