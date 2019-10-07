const studentReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_STUDENTS':
      return action.payload

    case 'CREATE_STUDENT':
      debugger;
      return [...state, action.payload]
      
    default:
      return state;
  }
}

export default studentReducer;