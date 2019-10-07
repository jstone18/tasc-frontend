export const fetchStudents = () => {
  return function(dispatch) {
    fetch('http://localhost:3001/api/v1/students')
    .then(res => res.json())
    .then(students => dispatch({
      type: 'FETCH_STUDENTS',
      payload: students
    }))
  };
};

export const createStudent = (newStudent) => {
  return dispatch => {
    fetch('http://localhost:3001/api/v1/students', {
      method: 'POST',
      body: JSON.stringify({ student: newStudent}),
      headers: {
        Accept: 'application/json',
          'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(student => dispatch({
      type: 'CREATE_STUDENT',
      payload: student
    }))
  }
}