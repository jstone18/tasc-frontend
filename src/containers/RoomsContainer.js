import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRooms } from '../redux/actions/rooms'
import RoomsList from '../components/RoomsList'
import RoomHeader from '../components/RoomHeader'
import ShowFormButton from '../components/RoomFormButtton'
// import RoomCreateForm from '../components/RoomCreateForm'

class RoomsContainer extends Component {

  componentDidMount() {
    this.props.getRooms()
  }
  
  render() {
    
    return (
      <div>
        <RoomHeader />
        <RoomsList rooms={this.props.rooms} students={this.props.students}  />
        {/* <RoomCreateForm rooms={this.props.rooms} /> */}
        <ShowFormButton  />
      </div>
    )
  }
}

const mapStateToProps = state => {
  
  return {
    rooms: state.rooms, 
    students: state.students
  }
}


export default connect(mapStateToProps, { getRooms })(RoomsContainer)
