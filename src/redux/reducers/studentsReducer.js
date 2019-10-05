const studentReducer = (state = { students: [] }, action) => {
  switch (action.type) {
    case 'FETCH_STUDENTS':
      return action.payload

    default:
      return state;
  }
}

export default studentReducer;