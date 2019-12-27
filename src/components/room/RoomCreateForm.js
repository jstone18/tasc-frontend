import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createRoom } from '../../redux/actions/rooms'

class NewRoom extends Component {
  state = {
    title: ''
  }
  

  handleChange = event => {
    this.setState({
      title: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.createRoom(this.state)
    this.setState({
      title: ''
    })
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <h4 className="ui dividing header">Room Title</h4>
          <div className="field">
            <label>Title</label>
            <input 
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Room Title"
            />
            <button type="submit" >Create Room</button>
          </div>
        </form>
      </div>
    )
  }

}

export default connect(null, { createRoom })(NewRoom);
