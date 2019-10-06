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