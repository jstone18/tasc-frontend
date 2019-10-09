import '../css/App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchStudents } from '../redux/actions/students'

import Navbar from '../components/Navbar'
import Dashboard from '../components/Dashboard'
import StudentsList from './StudentsList'
import NewStudentForm from '../components/NewStudentForm'
import StudentProfile from '../components/StudentProfile'
import EditStudent from '../components/EditStudent'
import RoomsContainer from './RoomsContainer'

class App extends Component {

  componentDidMount() {
    this.props.fetchStudents()
  }
  
  render() {
    return (
      <div className="ui container App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/students" component={StudentsList} />
          <Route exact path="/students/new" component={NewStudentForm} />
          <Route exact path="/students/:id/edit" component={EditStudent} />
          <Route exact path="/students/:id" component={StudentProfile} />
          <Route exact path="/rooms" component={RoomsContainer} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default connect(null, { fetchStudents })(App);
