import React from 'react'
import faker from 'faker'

const StudentCard = ({student}) => {
  return (
    <tbody>
      <tr>
        <td data-label='Name'>
          <h4 className="ui image header">
            <img className="ui mini rounded image" src={faker.image.avatar()} alt=''/>
            <div className="content">
              {student.first_name} {student.last_name}
              <div className="sub header">
                Age: {student.age}
              </div>
            </div>
          </h4>
        </td>
        <td data-label='Room'>{student.room.title}</td>
        <td data-label='Status'>
          <div className="checkbox">
            <input type='checkbox'/>
            <br/>
            <label>Present?</label>
          </div>
        </td>
      </tr> 
    </tbody>
  )
}

export default StudentCard
