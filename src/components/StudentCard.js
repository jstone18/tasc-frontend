import React from 'react'
import faker from 'faker'
import { Link } from 'react-router-dom'
const StudentCard = ({student}) => {
  debugger;
  return (
    <tbody>
      <tr>
        <td data-label='Name'>
          <Link to={`/students/${student.id}`}>
            <h4 className="ui image header">
              <img className="ui mini rounded image" src={faker.image.avatar()} alt=''/>
              <div className="content">
                {student.first_name} {student.last_name}
                <div className="sub header">
                  Age: {student.age}
                </div>
              </div>
            </h4>
          </Link>  
        </td>
        {
          !student.room.title  ? <td>No room assignment.</td> 
        : 
          <td data-label='Room'>{student.room.title}</td>
        }
        {
          !student.attendances ? <td>No attendance record.</td>
        : 
          <td data-label='Status'>
            {student.attendances.length > 0 && !!student.attendances[0].check_in ? "Checked In" : "Checked Out"}
          </td>
        }
        </tr>
    </tbody>
  )
}

export default StudentCard
