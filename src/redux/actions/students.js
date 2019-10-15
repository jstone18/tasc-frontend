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

export const createStudent = (newStudent, history) => {
  return dispatch => {
    fetch('http://localhost:3001/api/v1/students', {
      method: 'POST',
      body: JSON.stringify({ student: newStudent }),
      headers: {
        Accept: 'application/json',
          'Content-Type': 'applicatio n/json'
      }
    })
    .then(res => res.json())
    .then(student => {
      dispatch({type: 'CREATE_STUDENT', payload: student})
    })
    history.push(`/students`)
  };
};

export const deleteStudent = (id, history) => {
  return dispatch => {
    fetch(`http://localhost:3001/api/v1/students/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(id => {
      dispatch({ type: 'DELETE_STUDENT', payload: id });
      history.push('/students')
    })
  };
};

export const updateStudent = (updatedStudent, id, history) => {
  const studentToUpdate = { student: updatedStudent };

  return dispatch => {
    fetch(`http://localhost:3001/api/v1/students/${id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(studentToUpdate),
    })
    .then(res => res.json())
    .then(updatedStudent => {
      dispatch({ type: 'UPDATE_STUDENT', payload: updatedStudent})
    })
    history.push(`/students/${id}`)
  };
};