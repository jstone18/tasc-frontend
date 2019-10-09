import React from 'react'
import { Link } from 'react-router-dom'

const RoomHeader = () => {
  return (
    <div id="room-header">
      <h1>
        ROOMS LIST
      </h1>
      <div>
        <Link to='/room/new'>
          <button id="add-room">+Add Room</button>
        </Link>
      </div>
    </div>
  )
}

export default RoomHeader