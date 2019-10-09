const studentReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_STUDENTS':
      return action.payload

    case 'CREATE_STUDENT':
      return [...state, action.payload]

    case 'DELETE_STUDENT':
      return state.filter(student => student.id !== action.payload);

    default:
      return state;
  }
}

export default studentReducer;