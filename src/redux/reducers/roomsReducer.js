const roomsReducer = (state = [], action) => {
  // debugger;
  switch (action.type) {
    case 'GET_ROOMS':
      return action.payload

    case 'CREATE_ROOM':
      return [...state, action.payload]
  
    default:
      return state;
  }
}

export default roomsReducer;