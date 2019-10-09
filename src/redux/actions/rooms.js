export const getRooms = () => {
  return dispatch => {
    fetch('http://localhost:3001/api/v1/rooms')
    .then(res => res.json())
    .then(rooms => dispatch({type: 'GET_ROOMS', payload: rooms}))
  }
}