import React from 'react'

const RoomCard = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.room.title}</td>
      </tr>
    </tbody>
  )
}

export default RoomCard
