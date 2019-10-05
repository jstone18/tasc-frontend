import '../css/App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchStudents } from '../redux/actions/students'

class App extends Component {

  componentDidMount() {
    this.props.fetchStudents()
  }
  
  
  render() {
    return (
      <div className="App">
        <h1>App</h1>
      </div>
    );
  }
}

export default connect(null, { fetchStudents })(App);
