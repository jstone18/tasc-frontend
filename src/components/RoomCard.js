import React from 'react'
import faker from 'faker'
import { Link } from 'react-router-dom'

const RoomCard = (props) => {
  // console.log(props)
  const student = props.room.students.map(student => 
     (
      <div>
        <div  id="student-room">
          <Link to={`/students/${student.id}`}>
            <img className="ui mini circular image" src={faker.image.avatar()} alt=''/>
            <div className="header">{student.first_name}</div>
          </Link>
        </div>
      </div>
    )
  )
  return (
    <tbody>
      <tr>
        <td>{props.room.title}</td>
        <td id="student-room-list" key={student.id}>{student}</td> 
      </tr>
    </tbody>
  )
}

export default RoomCard
