import React from 'react'
import RoomCard from './RoomCard'

const RoomsList = ({ rooms }) => {
  const room = rooms.map(room => <RoomCard key={room.id} room={room} />)
  return (
    <div className="ui segment">
      <table className="ui fixed single line celled table">
        <thead>
          <tr>
            <th className="four wide">Room Titile</th>
            <th>Students</th>
          </tr>
        </thead>
          { room }
      </table>    
    </div>
  )
}

export default RoomsList
