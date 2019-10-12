import '../css/App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Navbar from '../components/Navbar'
import Dashboard from '../components/Dashboard'
import NewStudentForm from '../components/StudentCreateForm'
import StudentProfile from '../components/StudentProfile'
import EditStudent from '../components/StudentEditForm'
import RoomsContainer from './RoomsContainer'
import StudentsContainer from './StudentsContainer'
import AttendancesContainer from './AttendancesContainer'

class App extends Component {

  
  
  render() {
    return (
      <div className="ui container App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/students" component={StudentsContainer} />
          <Route exact path="/students/new" component={NewStudentForm} />
          <Route exact path="/students/:id/edit" component={EditStudent} />
          <Route exact path="/students/:id" component={StudentProfile} />
          <Route exact path="/students/:id/attendances" component={AttendancesContainer} />
          <Route exact path="/rooms" component={RoomsContainer} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default connect(null)(App);
