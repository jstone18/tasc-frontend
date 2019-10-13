export const getRooms = () => {
  return dispatch => {
    fetch('http://localhost:3001/api/v1/rooms')
    .then(res => res.json())
    .then(rooms => dispatch({type: 'GET_ROOMS', payload: rooms}))
  }
}

export const createRoom = (newRoom) => {
  return dispatch => {
    fetch('http://localhost:3001/api/v1/rooms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRoom)
    })
    .then(res => res.json())
    .then(room => dispatch({ type: 'CREATE_ROOM', payload: room}))
  }
}