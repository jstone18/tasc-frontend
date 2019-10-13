export const createAttendance = (attendance, studentId) => {
  return dispatch => {
    fetch(`http://localhost:3001/api/v1/students/${studentId}/attendances`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(attendance)
    })
    .then(res => res.json())
    .then(student => dispatch({ type: 'CREATE_ATTENDANCE', payload: student  }))
  }
}