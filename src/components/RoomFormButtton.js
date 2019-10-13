import React, { Component } from 'react'
import NewRoom from './RoomCreateForm'

export default class ShowFormButton extends Component {
  state = {
    showForm: false
  }

  showForm = (bool) => {
    this.setState({
      showMessage: bool
    });
  }

  render() {
    return (
      <>
        <div className="form-show-button"> 
          <button onClick={this.showForm}>Add Room</button>
        </div>
        <div>
          { this.state.showMessage && (<div>{<NewRoom />}</div>) }
        </div>
      </>
    )
  }
}
