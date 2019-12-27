import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRooms } from '../redux/actions/rooms'
import RoomsList from '../components/room/RoomsList'
import RoomHeader from '../components/room/RoomHeader'
import ShowFormButton from '../components/room/RoomFormButtton'

class RoomsContainer extends Component {

  componentDidMount() {
    this.props.getRooms()
  }
  
  render() {
    
    return (
      <div>
        <RoomHeader />
        <RoomsList rooms={ this.props.rooms } students={ this.props.students }  />
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
