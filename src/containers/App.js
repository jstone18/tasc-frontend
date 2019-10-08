import '../css/App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchStudents } from '../redux/actions/students'

import Navbar from '../components/Navbar'
import Dashboard from '../components/Dashboard'
import StudentsList from './StudentsList'
import NewStudent from '../components/NewStudent'
import StudentProfile from '../components/studentComponents/StudentProfile'

class App extends Component {

  componentDidMount() {
    this.props.fetchStudents()
  }
  
  render() {
    return (
      <div className="ui container App">
      <Router>
        <Navbar />
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/students" component={StudentsList} />
        <Route path="/students/new" component={NewStudent} />
        <Route path="/students/:id" component={StudentProfile} />
      </Router>
      </div>
    );
  }
}

export default connect(null, { fetchStudents })(App);
