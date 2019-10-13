import React from 'react'
import { Link } from 'react-router-dom'

const StudentsHeader = () => {
  return (
    <div id="students-header">
      <h1>
        STUDENTS LIST
      </h1>
      <Link to='/students/new'>
        <button id="add-student">+Add Student</button>
      </Link>
    </div>
  )
}

export default StudentsHeader
