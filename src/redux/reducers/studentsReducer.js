const studentReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_STUDENTS':
      return action.payload

    case 'CREATE_STUDENT':
      return [...state, action.payload]

    case 'UPDATE_STUDENT':
      return state.map(student => {
        if (student.id === action.payload.id) {
          return action.payload
        } else {
          return student
        }
      })

    case 'DELETE_STUDENT':
      return state.filter(student => student.id !== action.payload);

    default:
      return state;
  }
}

export default studentReducer;