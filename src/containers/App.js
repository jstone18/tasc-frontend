import '../css/App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchStudents } from '../redux/actions/students'

import Dashboard from '../components/Dashboard'
import StudentsList from './StudentsList'

class App extends Component {

  componentDidMount() {
    this.props.fetchStudents()
  }
  
  render() {
    return (
      <div className="App">
      <Router>
        <Route exact path="/" component={Dashboard} />
        <Route path="/students" component={StudentsList} />
      </Router>
      </div>
    );
  }
}

export default connect(null, { fetchStudents })(App);
